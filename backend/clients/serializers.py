from rest_framework import serializers
from .models import Client
from devises.serializers import DeviseSerializer
from django.contrib.auth.models import User
from authentification.serializers import UserSerializer


class ClientSerializer(serializers.ModelSerializer):
    devise = DeviseSerializer()
    cree_par = serializers.ReadOnlyField(source='cree_par.username')
    class Meta:
        model = Client
        fields = '__all__'
    
class InfoClientSerializer(serializers.ModelSerializer):
    devise = DeviseSerializer()
    cree_par = serializers.ReadOnlyField(source='cree_par.username')
    class Meta:
        model = Client
        fields = ['id', 'nom', 'devise' , 'cree_par']

class ClientAjoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


       