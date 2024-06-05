from django.urls import path
from .views import ( 
    ListePaiementsView , 
    PaiementPartielDetailView, 
    PaiementCreateView,
    PaiementPartielListView,
    PaiementCompletListView ,
    RapportPaiementView
     
)

urlpatterns = [
    path('paiements/', ListePaiementsView.as_view(), name='liste-paiements'),
    path('paiements/partiel/', PaiementPartielListView.as_view(), name='liste-paiements-partiel'),
    path('paiements/complet/', PaiementCompletListView.as_view(), name='liste-paiements-complet'),
    path('paiements/<int:pk>/', PaiementPartielDetailView.as_view(), name='paiement_detail'),
    path('factures/<int:pk>/paiement/', PaiementCreateView.as_view() , name='paiement'),
    path('paiements/rapport/', RapportPaiementView.as_view(), name='rapport-paiement'),
    

]
