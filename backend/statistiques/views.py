from rest_framework.views import APIView
from rest_framework.response import Response
from factures_service.models import FactureService
from factures_vente.models import FactureVente
from clients.models import Client
from .serializers import (
    ClientStatistiquesSerializer,
    FactureVenteStatistiquesSerializer,
    FactureServiceStatistiquesSerializer,
)

class ClientStatistiques(APIView):
    def get(self, request):
        total_clients = Client.objects.count()
        serializer = ClientStatistiquesSerializer({'total_clients': total_clients})
        return Response(serializer.data)

class FactureVenteStatistiques(APIView):
    def get(self, request):
        total_factures_vente = FactureVente.objects.count()
        serializer = FactureVenteStatistiquesSerializer({'total_factures_vente': total_factures_vente})
        return Response(serializer.data)

class FactureServiceStatistiques(APIView):
    def get(self, request):
        total_factures_service = FactureService.objects.count()
        serializer = FactureServiceStatistiquesSerializer({'total_factures_service': total_factures_service})
        return Response(serializer.data)
