from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView,  DestroyAPIView
from .models import Client
from .serializers import ClientSerializer

from rest_framework.permissions import AllowAny,IsAuthenticated ,IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import permissions

from rest_framework import status
from rest_framework import generics 

from factures.models import Facture
from factures.serializers import FactureSerializer

class FacturesClientAPIView(ListAPIView):
    serializer_class = FactureSerializer

    def get_queryset(self):
        # Récupérer le client spécifié par l'ID dans les paramètres de requête
        client_id = self.kwargs['client_id']
        return Facture.objects.filter(client_id=client_id)

class ClientListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    def perform_create(self, serializer):
      serializer.save(creer_par=self.request.user)

class ClientDetailView(generics.RetrieveUpdateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    
    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 

class ClientCreateView(CreateAPIView):
    # permission_classes = (AllowAny,)
    permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer 

    def perform_create(self, serializer):
      serializer.save(creer_par=self.request.user) 

class ClientDeleteView(DestroyAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    lookup_field = 'pk'

class VueListeClientsVIP(generics.ListAPIView):
    serializer_class = ClientSerializer

    def get_queryset(self):
        return Client.objects.filter(est_vip=True)