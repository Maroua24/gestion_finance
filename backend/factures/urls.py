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
    RapportFacturesVenteView,
    FactureDetail ,
    FactureServiceDetail ,
    FactureVenteDetail,
    FactureNonPayeeDetail
) 


urlpatterns = [ 
    path('facture_vente/rapport/', RapportFacturesServiceView.as_view(), name='rapport-facture-service'),
    path('facture_service/rapport/', RapportFacturesVenteView.as_view(), name='rapport-facture-vente'),
    path('factures/', FactureListView.as_view(), name='facture-list'),
    path('factures/vente/', FactureVenteList.as_view(), name='facture-vente-list'),
    path('factures/service/', FactureServiceList.as_view(), name='facture-service-list'),
    path('factures/non_payee/', FactureNonPayeeList.as_view(), name='facture-non-payee-list'),
    path('factures/ajouter/', FactureListCreate.as_view(), name='facture-ajouter'),
    path('facture/<int:id>/pdf/', PDFFactureView.as_view(), name='facture-pdf'),
    path('facture/<int:pk>/', FactureDetail.as_view(), name='facture-detail'),
    path('facture_vente/<int:pk>/', FactureVenteDetail.as_view(), name='facture-vente-detail'),
    path('facture_service/<int:pk>/', FactureServiceDetail.as_view(), name='facture-service-detail'),
    path('facture_non_payee/<int:pk>/', FactureNonPayeeDetail.as_view(), name='facture-non_payee-detail'),
    


]
