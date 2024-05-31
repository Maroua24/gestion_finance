from django.urls import path
from .views import ( 
    ListePaiements ,
    PaiementPartielDetailView, 
    PaiementCreateView,
    PaiementPartielList,
    PaiementCompletList ,
    RapportPaiementView
     

)

urlpatterns = [
    path('paiements/', ListePaiements.as_view(), name='liste-paiements'),
    path('paiements/partiel/', PaiementPartielList.as_view(), name='liste-paiements-partiel'),
    path('paiements/complet/', PaiementCompletList.as_view(), name='liste-paiements-complet'),
    path('paiements/<int:pk>/', PaiementPartielDetailView.as_view(), name='paiement_detail'),
    path('factures/<int:pk>/paiement/', PaiementCreateView.as_view() , name='paiement'),
    path('paiements/rapport/', RapportPaiementView.as_view(), name='rapport-paiement'),
    

]
