from django.urls import path
from .views import ClientStatistiques, FactureVenteStatistiques, FactureServiceStatistiques

urlpatterns = [
    path('clients/statistiques/', ClientStatistiques.as_view(), name='client_Statistiques'),
    path('factures-vente/statistiques/', FactureVenteStatistiques.as_view(), name='facture_vente_Statistiques'),
    path('factures-service/statistiques/', FactureServiceStatistiques.as_view(), name='facture_service_Statistiques'),
    # Ajoutez d'autres URLs pour d'autres statistiques si nécessaire
]
