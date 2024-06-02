from django.urls import path
from .views import (
    ClientListView, ClientDetailView, 
    ClientCreateView,ClientDeleteView, 
    VueListeClientsVIP ,FacturesClientAPIView ,
    PaiementHistoryView , HistouriqueView ,
    RapportClientsView , RapportClientsVIPView,
    AvoirsClientsAPIView,
) 

urlpatterns = [
    path('clients/<int:pk>/listavoir/', AvoirsClientsAPIView.as_view(), name='client-listavoir'),
    path('clients-vip/rapport/', RapportClientsView.as_view(), name='clients-VIP-rapport'),
    path('clients/rapport/', RapportClientsView.as_view(), name='clients-rapport'),
    path('clients/', ClientListView.as_view(), name='client-list'),
    path('clients/<int:pk>/', ClientDetailView.as_view(), name='client-detail'),
    path('clients/create/', ClientCreateView.as_view(), name='client-create'),
    
    path('clients/<int:pk>/delete/', ClientDeleteView.as_view(), name='client-delete'),
    path('clients-vip/', VueListeClientsVIP.as_view(), name='liste_clients_vip'),
    path('clients/<int:client_id>/factures/', FacturesClientAPIView.as_view(), name='factures_client_api'),
    path('clients/<int:client_id>/paiements/', PaiementHistoryView.as_view(), name='client_paiement_history'),
    path('clients/<int:client_id>/historique/', HistouriqueView.as_view(), name='client_history'),
]