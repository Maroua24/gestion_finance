from rest_framework.views import APIView
from rest_framework.response import Response
from factures.models import Facture
from clients.models import Client
from paiements.models import Paiement
from avoirs.models import Avoir
from .serializers import (
    ClientStatistiquesSerializer,
    FactureStatistiquesSerializer,
    FactureServiceStatistiquesSerializer,
    FactureVenteStatistiquesSerializer,
    PaiementStatistiqueSerializer,
    AvoirStatistiquesSerializer
)
from django.http import HttpResponse
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from django.views import View
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from io import BytesIO



class ClientStatistiques(APIView):
    def get(self, request):
        total_clients = Client.objects.count()
        serializer = ClientStatistiquesSerializer({ total_clients})
        return Response(serializer.data)
    
class ClientVipStatistiques(APIView):
    def get(self, request):
        total_clients_vip = Client.objects.filter(est_vip=True).count()
        serializer = ClientStatistiquesSerializer({ total_clients_vip})
        return Response(serializer.data)

class FactureStatistiques(APIView):
    def get(self, request):
        total_factures = Facture.objects.count()
        serializer = FactureStatistiquesSerializer({ total_factures})
        return Response(serializer.data)

class FactureVenteStatistiques(APIView):
    def get(self, request):
        total_factures_vente = Facture.objects.filter(type_facture='Vente').count()
        serializer = FactureVenteStatistiquesSerializer({total_factures_vente})
        return Response(serializer.data)

class FactureServiceStatistiques(APIView):
    def get(self, request):
        total_factures_service = Facture.objects.filter(type_facture='Service').count()
        serializer = FactureServiceStatistiquesSerializer({ total_factures_service})
        return Response(serializer.data)

class PaiementCompletStatistiques(APIView):
    def get(self, request):
        total_paiements_complet = Paiement.objects.filter(etat='complet').count()
        serializer = PaiementStatistiqueSerializer({ total_paiements_complet}) 
        return Response(serializer.data)

class PaiementPartielStatistiques(APIView):
    def get(self, request):
        total_paiements_partiel = Paiement.objects.filter(etat='partiel').count()
        serializer = PaiementStatistiqueSerializer({ total_paiements_partiel})
        return Response(serializer.data)

class PaiementStatistiques(APIView):
    def get(self, request):
        total_paiements = Paiement.objects.count()
        serializer = PaiementStatistiqueSerializer({total_paiements})
        return Response(serializer.data)
    
class AvoirStatistiques(APIView):
    def get(self, request):
        total_avoirs = Avoir.objects.count()
        serializer = AvoirStatistiquesSerializer({ total_avoirs})
        return Response(serializer.data)
    
class AvoirServiceStatistiques(APIView):
    def get(self, request):
        total_avoirs_service = Avoir.objects.filter(type_facture='Service').count()
        serializer = AvoirStatistiquesSerializer({ total_avoirs_service})
        return Response(serializer.data)

class AvoirVenteStatistiques(APIView):
    def get(self, request):
        total_avoirs_vente = Avoir.objects.filter(type_facture='Vente').count()
        serializer = AvoirStatistiquesSerializer({ total_avoirs_vente})
        return Response(serializer.data)    



# class GenererRapportPDF(View):
#     def get(self, request, *args, **kwargs):
#         try:
#             # Collecte des données des statistiques
#             total_clients = Client.objects.count()
#             total_factures = Facture.objects.count()
#             total_factures_vente = Facture.objects.filter(type_facture='Vente').count()
#             total_factures_service = Facture.objects.filter(type_facture='Service').count()
#             total_paiements = Paiement.objects.count()
            
#             buffer = BytesIO()
#             pdf = canvas.Canvas(buffer, pagesize=A4)
            
#             pdf.drawString(25, 800, f"Rapport des Statistiques")
#             pdf.drawString(25, 780, f"Total Clients: {total_clients}")
#             pdf.drawString(25, 760, f"Total Factures: {total_factures}")
#             pdf.drawString(25, 740, f"Total Factures Vente: {total_factures_vente}")
#             pdf.drawString(25, 720, f"Total Factures Service: {total_factures_service}")
#             pdf.drawString(25, 700, f"Total Paiements: {total_paiements}")
            
#             pdf.showPage()
#             pdf.save()

#             pdf_data = buffer.getvalue()

#             response = HttpResponse(pdf_data, content_type='application/pdf')
#             response['Content-Disposition'] = 'inline; filename="rapport_statistiques.pdf"'
#             # pour le téléchargement automatique
#             # response['Content-Disposition'] = 'attachment; filename="rapport_statistiques.pdf"'

#             return response
#         except Exception as e:
#             return HttpResponse(f'Erreur lors de la génération du rapport: {str(e)}', status=500)