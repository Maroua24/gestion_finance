from django.urls import path
from .views import (
    ClientStatistiques, 
    FactureVenteStatistiques, 
    FactureServiceStatistiques , 
    FactureStatistiques , 
    PaiementStatistiques , 
    GenererRapportPDF
    )

urlpatterns = [
    path('clients/statistiques/', ClientStatistiques.as_view(), name='client_Statistiques'),
    path('factures/statistiques/', FactureStatistiques.as_view(), name='factures_Statistiques'),
    path('factures-vente/statistiques/', FactureVenteStatistiques.as_view(), name='facture_vente_Statistiques'),
    path('factures-service/statistiques/', FactureServiceStatistiques.as_view(), name='facture_service_Statistiques'),
    path('paiements/statistiques/', PaiementStatistiques.as_view(), name='paiements_Statistiques'),
    path('rapport/', GenererRapportPDF.as_view(), name='rapport_pdf'),

]
