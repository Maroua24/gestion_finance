from rest_framework import serializers
from .models import Avoir
from clients.serializers import InfoClientSerializer
from commandes.serializers import Commande_ligneSerializer
from factures.models import Facture
from factures.serializers import FactureSerializer , FactureAvoirSerializer
from commandes.models import Commande_ligne


class AvoirSerializer(serializers.ModelSerializer):
    facture = serializers.PrimaryKeyRelatedField(queryset=Facture.objects.all())
    client = InfoClientSerializer()
    class Meta:
        model = Avoir
        fields = '__all__'



class AvoirDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avoir
        fields = '__all__'


class CreateAvoirSerializer(serializers.ModelSerializer):
    # Définissez vos champs et vos validations ici

    def create(self, validated_data):
        # Supprimez le champ 'facture' de validated_data pour éviter les erreurs de création récursive
        facture = validated_data.pop('facture')
        avoir = Avoir.objects.create(facture=facture, **validated_data)
        return avoir

    class Meta:
        model = Avoir
        fields = '__all__'