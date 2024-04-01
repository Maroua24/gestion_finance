from rest_framework.permissions import IsAuthenticated
from .models import Factureservice
from .serializers import  FactureserviceSerializer
from rest_framework.generics import ListAPIView,  CreateAPIView, UpdateAPIView 

class  FactureserviceListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Factureservice.objects.all()
    serializer_class = FactureserviceSerializer

class FactureserviceCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Factureservice.objects.all()
    serializer_class = FactureserviceSerializer

class FactureserviceUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Factureservice.objects.all()
    serializer_class = FactureserviceSerializer
