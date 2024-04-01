from rest_framework import serializers
from .models import FactureVente

class FactureVenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactureVente
        fields = '__all__'