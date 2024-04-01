from rest_framework.permissions import IsAuthenticated
from .models import FactureVente
from .serializers import FactureVenteSerializer
from rest_framework.generics import ListAPIView,  CreateAPIView, UpdateAPIView 

class FactureVenteListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureVente.objects.all()
    serializer_class = FactureVenteSerializer

class FactureVenteCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureVente.objects.all()
    serializer_class = FactureVenteSerializer

class FactureVenteUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureVente.objects.all()
    serializer_class = FactureVenteSerializer