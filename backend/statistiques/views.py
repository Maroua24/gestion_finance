from rest_framework.views import APIView
from rest_framework.response import Response
from factures.models import Facture
from clients.models import Client
from paiements.models import Paiement
from .serializers import (
    ClientStatistiquesSerializer,
    FactureStatistiquesSerializer,
    FactureServiceStatistiquesSerializer,
    FactureVenteStatistiquesSerializer,
    PaiementStatistiqueSerializer
)

class ClientStatistiques(APIView):
    def get(self, request):
        total_clients = Client.objects.count()
        serializer = ClientStatistiquesSerializer({'total_clients': total_clients})
        return Response(serializer.data)

class FactureStatistiques(APIView):
    def get(self, request):
        total_factures = Facture.objects.count()
        serializer = FactureStatistiquesSerializer({'total_factures': total_factures})
        return Response(serializer.data)

class FactureVenteStatistiques(APIView):
    def get(self, request):
        total_factures_vente = Facture.objects.filter(type_facture='Vente').count()
        serializer = FactureVenteStatistiquesSerializer({'total_factures_vente': total_factures_vente})
        return Response(serializer.data)

class FactureServiceStatistiques(APIView):
    def get(self, request):
        total_factures_service = Facture.objects.filter(type_facture='Service').count()
        serializer = FactureServiceStatistiquesSerializer({'total_factures_service': total_factures_service})
        return Response(serializer.data)

class PaiementStatistiques(APIView):
    def get(self, request):
        total_paiements = Paiement.objects.count()
        serializer = PaiementStatistiqueSerializer({'total_paiements': total_paiements})
        return Response(serializer.data)

