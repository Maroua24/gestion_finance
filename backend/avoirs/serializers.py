from rest_framework import serializers
from .models import Avoir
from clients.serializers import InfoClientSerializer
from factures.models import Facture



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

    def create(self, validated_data):
    
        facture = validated_data.pop('facture')
        avoir = Avoir.objects.create(facture=facture, **validated_data)
        return avoir

    class Meta:
        model = Avoir
        fields = '__all__'