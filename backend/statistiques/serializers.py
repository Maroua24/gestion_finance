from rest_framework import serializers

class ClientStatistiquesSerializer(serializers.Serializer):
    total_clients = serializers.IntegerField()

class FactureVenteStatistiquesSerializer(serializers.Serializer):
    total_factures_vente = serializers.IntegerField()

class FactureServiceStatistiquesSerializer(serializers.Serializer):
    total_factures_service = serializers.IntegerField()
