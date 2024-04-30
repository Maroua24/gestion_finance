from django.urls import path
from .views import (
    ProduitListView, ProduitDetailView, ProduitCreateView,
    ProduitUpdateView, ProduitDeleteView
)

urlpatterns = [
    path('produits/', ProduitListView.as_view(), name='Produit-list'),
    path('produits/<int:pk>/', ProduitDetailView.as_view(), name='Produit-detail'),
    path('produits/create/', ProduitCreateView.as_view(), name='Produit-create'),
    path('produits/<int:pk>/update/', ProduitUpdateView.as_view(), name='Produit-update'),
    path('produits/<int:pk>/delete/', ProduitDeleteView.as_view(), name='Produit-delete'),
    
]