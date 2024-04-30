from django.urls import path
from .views import FactureServiceListView , FactureServiceCreateView , FactureServiceUpdateView 
from .views import FactureVenteListView,  FactureVenteCreateView, FactureVenteUpdateView , GeneratePDFView , VueListeNonpayee


urlpatterns = [
    path('factures_service/', FactureServiceListView.as_view(), name='facture-list'),
    
    path('factures_service/create/', FactureServiceCreateView.as_view(), name='facture-create'),  
    path('factures_service/<int:pk>/update/', FactureServiceUpdateView.as_view(), name='facture-update'),
    #path('factures_service/<int:id>/pdf/', PDFFactureView.as_view(), name='facture-pdf'),
    path('factures_vente/', FactureVenteListView.as_view(), name='facture-list'),
    path('factures_vente/create/', FactureVenteCreateView.as_view(), name='facture-create'),
    path('factures_vente/<int:pk>/update/', FactureVenteUpdateView.as_view(), name='facture-update'),
    #path('factures_vente/<int:id>/pdf/', PDFFactureView.as_view(), name='facture-pdf'),
    path('Non-payees/', VueListeNonpayee.as_view(), name='liste_factures_nonpayee'),
    path('generate-pdf/', GeneratePDFView.as_view(), name='generate_pdf'),

]