from django.urls import path
from .views import (
    # FactureDetail,
    FactureVenteList,
    FactureServiceList,
    FactureNonPayeeList,
    FactureListCreate , 
    FactureListView ,
    PDFFactureView , 
    RapportFacturesServiceView,
    RapportFacturesVenteView
) 


urlpatterns = [ 
    path('facture_vente/rapport/', RapportFacturesServiceView.as_view(), name='rapport-facture-service'),
    path('facture_service/rapport/', RapportFacturesVenteView.as_view(), name='rapport-facture-vente'),
    path('factures/', FactureListView.as_view(), name='facture-list'),
    path('factures/vente/', FactureVenteList.as_view(), name='facture-vente-list'),
    path('factures/service/', FactureServiceList.as_view(), name='facture-service-list'),
    path('factures/non-payee/', FactureNonPayeeList.as_view(), name='facture-non-payee-list'),
    path('factures/ajouter/', FactureListCreate.as_view(), name='facture-ajouter'),
    path('factures/<int:id>/pdf/', PDFFactureView.as_view(), name='facture-pdf'),
    # path('factures/<int:pk>/', FactureDetail.as_view(), name='facture-detail'),
    


]
