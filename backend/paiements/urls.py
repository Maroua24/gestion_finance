from django.urls import path
from .views import  ListePaiements , PaiementPartielDetailView, PaiementCreateView

urlpatterns = [
    path('paiements/', ListePaiements.as_view(), name='liste-paiements'),

    path('paiements/<int:pk>/', PaiementPartielDetailView.as_view(), name='payer_detail'),
    path('factures/<int:pk>/paiement/', PaiementCreateView.as_view() , name='paiment')
    
]
