from django.contrib import admin
from django.urls import path, include
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('clients.urls')),
    path('api/', include('authentification.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('api/', include('factures.urls')),
    path('api/', include('devises.urls')),
    path('api/', include('statistiques.urls')),
    path('api/', include('paiements.urls')),
    path('api/', include('avoirs.urls'))
    

]
    
