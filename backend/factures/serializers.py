from rest_framework import serializers

from clients.serializers import InfoClientSerializer 
from .models import Facture
from commandes.serializers import Commande_ligneSerializer
from avoirs.models import Avoir
from clients.models import Client


class FactureSerializer(serializers.ModelSerializer): 
    client = InfoClientSerializer()
    
    class Meta:
        model = Facture
        fields = '__all__'


class FactureAjoutSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Facture
        fields = '__all__'

class FactureAvoirSerializer(serializers.ModelSerializer): 
    client = InfoClientSerializer()
    
    def create(self, validated_data):
        # Supprimez le champ 'facture' de validated_data pour éviter les erreurs de création récursive
        
        facture = validated_data.pop('facture')
        avoir = Avoir.objects.create(facture=facture, **validated_data)
        return avoir
    
    class Meta:
        model = Facture
        fields = '__all__'