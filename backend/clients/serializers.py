from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    cree_par = serializers.ReadOnlyField(source='cree_par.username')
    class Meta:
        model = Client
        fields = '__all__'
       