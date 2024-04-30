from django.urls import path
from .views import (
    CommandeListView, CommandeDetailView, CommandeCreateView,
    CommandeUpdateView, CommandeDeleteView ,
    Commande_ligneListView, Commande_ligneDetailView, Commande_ligneCreateView,
    Commande_ligneUpdateView, Commande_ligneDeleteView
)

urlpatterns = [
    path('commandes/', CommandeListView.as_view(), name='Commande-list'),
    path('commandes/<int:pk>/', CommandeDetailView.as_view(), name='Commande-detail'),
    path('commandes/create/', CommandeCreateView.as_view(), name='Commande-create'),
    path('commandes/<int:pk>/update/', CommandeUpdateView.as_view(), name='Commande-update'),
    path('commandes/<int:pk>/delete/', CommandeDeleteView.as_view(), name='Commande-delete'),
    
    path('Commande_ligne/', Commande_ligneListView.as_view(), name='Commande_ligne-list'),
    path('Commande_ligne/<int:pk>/', Commande_ligneDetailView.as_view(), name='Commande_ligne-detail'),
    path('Commande_ligne/create/', Commande_ligneCreateView.as_view(), name='Commande_ligne-create'),
    path('Commande_ligne/<int:pk>/update/', Commande_ligneUpdateView.as_view(), name='Commande_ligne-update'),
    path('Commande_ligne/<int:pk>/delete/', Commande_ligneDeleteView.as_view(), name='Commande_ligne-delete'),
    
]
