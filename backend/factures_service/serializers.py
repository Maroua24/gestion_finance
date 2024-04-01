from rest_framework import serializers
from .models import Factureservice

class FactureserviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factureservice
        fields = '__all__'