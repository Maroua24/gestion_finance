from django.urls import path
from .views import (
    ClientStatistiques, 
    ClientVipStatistiques,
    FactureVenteStatistiques, 
    FactureServiceStatistiques , 
    FactureStatistiques , 
    PaiementStatistiques ,
    PaiementCompletStatistiques,
    PaiementPartielStatistiques, 
    AvoirStatistiques,
    AvoirServiceStatistiques,
    AvoirVenteStatistiques,
    #GenererRapportPDF ,
    )

urlpatterns = [
    path('clients/statistiques/', ClientStatistiques.as_view(), name='client_Statistiques'),
    path('clients_vip/statistiques/', ClientVipStatistiques.as_view(), name='client_Vip_Statistiques'),
    
    path('factures/statistiques/', FactureStatistiques.as_view(), name='factures_Statistiques'),
    path('factures-vente/statistiques/', FactureVenteStatistiques.as_view(), name='facture_vente_Statistiques'),
    path('factures-service/statistiques/', FactureServiceStatistiques.as_view(), name='facture_service_Statistiques'),

    path('paiements/statistiques/', PaiementStatistiques.as_view(), name='paiements_Statistiques'),
    path('paiements_complet/statistiques/', PaiementCompletStatistiques.as_view(), name='paiements_complet_Statistiques'),
    path('paiements_partiel/statistiques/', PaiementPartielStatistiques.as_view(), name='paiements_partiel_Statistiques'),

    path('avoirs/statistiques/', AvoirStatistiques.as_view(), name='avoir_Statistiques'),
    path('avoirs_vente/statistiques/', AvoirVenteStatistiques.as_view(), name='avoir_vente_Statistiques'),
    path('avoirs_service/statistiques/', AvoirServiceStatistiques.as_view(), name='avoir_service_Statistiques'),
    #path('rapport/', GenererRapportPDF.as_view(), name='rapport_pdf'),

]
