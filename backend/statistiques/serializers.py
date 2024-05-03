from rest_framework import serializers

class ClientStatistiquesSerializer(serializers.Serializer):
    total_clients = serializers.IntegerField()


class FactureStatistiquesSerializer(serializers.Serializer):
    total_factures = serializers.IntegerField()

class FactureVenteStatistiquesSerializer(serializers.Serializer):
    total_factures_vente = serializers.IntegerField()

class FactureServiceStatistiquesSerializer(serializers.Serializer):
    total_factures_service = serializers.IntegerField()

class PaiementStatistiqueSerializer(serializers.Serializer):
    total_paiements = serializers.IntegerField()