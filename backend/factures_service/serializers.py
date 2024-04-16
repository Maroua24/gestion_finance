from rest_framework import serializers
from .models import FactureService

class FactureServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FactureService
        fields = '__all__'