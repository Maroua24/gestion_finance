from django.urls import path
from .views import (AvoirDetailAndCreateAPIView, 
                    AvoirListAPIView, 
                    AvoirVenteListAPIView, 
                    AvoirServiceListAPIView,
                    RapportAvoirsVenteView ,
                    RapportAvoirsServiceView ,
                    AvoirDetail,
                    AvoirServiceDetail,
                    AvoirVenteDetail,
                    PDFAvoirView
                    
                    )

urlpatterns = [
    path('avoirs/<int:id>/pdf/', PDFAvoirView.as_view(), name='avoirs-pdf'),
    path('factures/<int:pk>/avoirs/', AvoirDetailAndCreateAPIView.as_view(), name='avoirs--facture'),
    path('avoirs/', AvoirListAPIView.as_view(), name='avoirs-list'),
    path('avoirs/vente/', AvoirVenteListAPIView.as_view(), name='avoirs-vente-list'),
    path('avoirs/service/', AvoirServiceListAPIView.as_view(), name='avoirs-service-list'),
    path('avoirs_vente/rapport/', RapportAvoirsVenteView.as_view(), name='avoirs-vente-rapport'),
    path('avoirs_service/rapport/', RapportAvoirsServiceView.as_view(), name='avoirs-service-rapport'),
    path('avoir/<int:pk>/', AvoirDetail.as_view(), name='avoir-detail'),
    path('avoir_vente/<int:pk>/', AvoirVenteDetail.as_view(), name='avoir-vente-detail'),
    path('avoir_service/<int:pk>/', AvoirServiceDetail.as_view(), name='avoir-service-detail'),
    
]