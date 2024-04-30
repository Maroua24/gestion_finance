from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from .models import Commande
from .serializers import CommandeSerializer
from .models import Commande_ligne
from .serializers import Commande_ligneSerializer
from rest_framework.response import Response

from rest_framework import status
from rest_framework import generics 

class CommandeListView(ListAPIView):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer

class CommandeDetailView(generics.RetrieveUpdateAPIView):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer
    
    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class Commande_ligneListView(ListAPIView):
    queryset = Commande_ligne.objects.all()
    serializer_class = Commande_ligneSerializer

class Commande_ligneDetailView(generics.RetrieveUpdateAPIView):
    queryset = Commande_ligne.objects.all()
    serializer_class = Commande_ligneSerializer
    
    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CommandeCreateView(CreateAPIView):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer
    

class CommandeUpdateView(UpdateAPIView):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer
    lookup_field = 'pk'

class CommandeDeleteView(DestroyAPIView):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer
    lookup_field = 'pk'

class Commande_ligneCreateView(CreateAPIView):
    queryset = Commande_ligne.objects.all()
    serializer_class = Commande_ligneSerializer
    

class Commande_ligneUpdateView(UpdateAPIView):
    queryset = Commande_ligne.objects.all()
    serializer_class = Commande_ligneSerializer
    lookup_field = 'pk'

class Commande_ligneDeleteView(DestroyAPIView):
    queryset = Commande_ligne.objects.all()
    serializer_class = Commande_ligneSerializer
    lookup_field = 'pk'

