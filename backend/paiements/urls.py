from django.urls import path
from .views import ( 
    ListePaiements ,
    PaiementPartielDetailView, 
    PaiementCreateView,
    PaiementPartielList,
    PaiementCompletList
     

)

urlpatterns = [
    path('paiements/', ListePaiements.as_view(), name='liste-paiements'),
    path('paiements/partiel/', PaiementPartielList.as_view(), name='liste-paiements-partiel'),
    path('paiements/complet/', PaiementCompletList.as_view(), name='liste-paiements-complet'),
    path('paiements/<int:pk>/', PaiementPartielDetailView.as_view(), name='payer_detail'),
    path('factures/<int:pk>/paiement/', PaiementCreateView.as_view() , name='paiment')
    

]
