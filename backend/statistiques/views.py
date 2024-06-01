from rest_framework.views import APIView
from rest_framework.response import Response
from factures.models import Facture
from clients.models import Client
from paiements.models import Paiement
from avoirs.models import Avoir

from django.http import HttpResponse
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from django.views import View

from io import BytesIO



class ClientStatistiques(APIView):
    def get(self, request):
        total_clients = Client.objects.count()
        return Response({total_clients})
    
class ClientVipStatistiques(APIView):
    def get(self, request):
        total_clients_vip = Client.objects.filter(est_vip=True).count()
        return Response({total_clients_vip})

class FactureStatistiques(APIView):
    def get(self, request):
        total_factures = Facture.objects.count()
        return Response({ total_factures})

class FactureVenteStatistiques(APIView):
    def get(self, request):
        total_factures_vente = Facture.objects.filter(type_facture='Vente').count()
        return Response({ total_factures_vente})

class FactureServiceStatistiques(APIView):
    def get(self, request):
        total_factures_service = Facture.objects.filter(type_facture='Service').count()
        return Response({ total_factures_service})

class PaiementCompletStatistiques(APIView):
    def get(self, request):
        total_paiements_complet = Paiement.objects.filter(etat='complet').count()
        return Response({ total_paiements_complet}) 

class PaiementPartielStatistiques(APIView):
    def get(self, request):
        total_paiements_partiel = Paiement.objects.filter(etat='partiel').count()
        return Response({ total_paiements_partiel})

class PaiementStatistiques(APIView):
    def get(self, request):
        total_paiements = Paiement.objects.count()
        return Response({ total_paiements})
    
class AvoirStatistiques(APIView):
    def get(self, request):
        total_avoirs = Avoir.objects.count()
        return Response({ total_avoirs})
    
class AvoirServiceStatistiques(APIView):
    def get(self, request):
        total_avoirs_service = Avoir.objects.filter(type_facture='Service').count()
        return Response({ total_avoirs_service})

class AvoirVenteStatistiques(APIView):
    def get(self, request):
        total_avoirs_vente = Avoir.objects.filter(type_facture='Vente').count()
        return Response({ total_avoirs_vente}) 

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