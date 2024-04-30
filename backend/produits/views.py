from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from .models import Produit
from .serializers import ProduitSerializer
from rest_framework.response import Response

from rest_framework import status
from rest_framework import generics 

class ProduitListView(ListAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

class ProduitDetailView(generics.RetrieveUpdateAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    
    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProduitCreateView(CreateAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    

class ProduitUpdateView(UpdateAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    lookup_field = 'pk'

class ProduitDeleteView(DestroyAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    lookup_field = 'pk'