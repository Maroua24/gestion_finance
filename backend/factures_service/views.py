from rest_framework.permissions import IsAuthenticated
from .models import FactureService
from .serializers import  FactureServiceSerializer
from rest_framework.generics import ListAPIView,  CreateAPIView, UpdateAPIView 

class  FactureServiceListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureService.objects.all()
    serializer_class = FactureServiceSerializer

class FactureServiceCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureService.objects.all()
    serializer_class = FactureServiceSerializer

class FactureServiceUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureService.objects.all()
    serializer_class = FactureServiceSerializer
