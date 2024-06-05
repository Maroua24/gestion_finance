from django.urls import path
from .views import (AvoirDetailAndCreateAPIView, 
                    AvoirListAPIView, 
                    AvoirVenteListAPIView, 
                    AvoirServiceListAPIView,
                    RapportAvoirVenteView ,
                    RapportAvoirServiceView ,
                    AvoirDetailAPIView,
                    AvoirServiceDetailAPIView,
                    AvoirVenteDetailAPIView,
                    PDFAvoirView
                    
                    )

urlpatterns = [
    path('avoirs/<int:id>/pdf/', PDFAvoirView.as_view(), name='avoirs-pdf'),
    path('factures/<int:pk>/avoirs/', AvoirDetailAndCreateAPIView.as_view(), name='avoirs--facture'),
    path('avoirs/', AvoirListAPIView.as_view(), name='avoirs-list'),
    path('avoirs/vente/', AvoirVenteListAPIView.as_view(), name='avoirs-vente-list'),
    path('avoirs/service/', AvoirServiceListAPIView.as_view(), name='avoirs-service-list'),
    path('avoirs_vente/rapport/', RapportAvoirVenteView.as_view(), name='avoirs-vente-rapport'),
    path('avoirs_service/rapport/', RapportAvoirServiceView.as_view(), name='avoirs-service-rapport'),
    path('avoir/<int:pk>/', AvoirDetailAPIView.as_view(), name='avoir-detail'),
    path('avoir_vente/<int:pk>/', AvoirVenteDetailAPIView.as_view(), name='avoir-vente-detail'),
    path('avoir_service/<int:pk>/', AvoirServiceDetailAPIView.as_view(), name='avoir-service-detail'),
    
]