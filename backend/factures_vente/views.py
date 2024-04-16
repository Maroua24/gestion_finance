import io

from rest_framework.permissions import IsAuthenticated
from .models import FactureVente
from .serializers import FactureVenteSerializer
from rest_framework.generics import ListAPIView,  CreateAPIView, UpdateAPIView 
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter , A4
from reportlab.platypus import Table, TableStyle
from reportlab.lib import colors
from django.views.generic import View
from django.http import  HttpResponse

class FactureVenteListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureVente.objects.all()
    serializer_class = FactureVenteSerializer

class FactureVenteCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureVente.objects.all()
    serializer_class = FactureVenteSerializer

class FactureVenteUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = FactureVente.objects.all()
    serializer_class = FactureVenteSerializer

class PDFFactureView(View):
    def get(self, request, id, *args, **kwargs):
     try:
        facture = FactureVente.objects.get(id=id)
       
        buffer = io.BytesIO()

        pdf = canvas.Canvas(buffer)

        pdf.drawString(100, 740, f"ID Facture: {facture.facture_id}")
        pdf.drawString(100, 800, f"Date de création: {facture.date_creation}")
        pdf.drawString(100, 780, f"Date de comptabilisation: {facture.date_comptabilisation}")
        pdf.drawString(100, 760, f"Date de déchéance: {facture.date_decheance}")
        
        pdf.showPage()
        pdf.save()

        pdf_data = buffer.getvalue()

       
        response = HttpResponse(pdf_data, content_type='application/pdf')
        response['Content-Disposition'] = 'inline; filename="facture.pdf"'
        # pour le téléchargement automatique
        #response['Content-Disposition'] = f'attachment; filename="facture_{id}.pdf"'

        return response
     except FactureVente.DoesNotExist:
        return HttpResponse('La facture demandée n\'existe pas.', status=404)

'''
    def get(self, request, facture_id, *args, **kwargs):
        try:
            facture = Facture.objects.get(id=facture_id)
            # Créer le PDF de la facture avec ReportLab
            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = f'filename="facture_{facture_id}.pdf"'
            pdf = canvas.Canvas(response)

            # Écrire les données de la facture dans le PDF
            #gray=0.5
            #pdf.setFillGray(gray)
            pdf.drawString(100, 800, f"Nom: {facture.nom}")
            pdf.drawString(100, 780, f"Prénom: {facture.prenom}")
            pdf.drawString(100, 760, f"Paiement: {facture.paiement}")
            pdf.drawString(100, 740, f"Code TVA: {facture.code_tva}")

            # Ajoutez d'autres données de la facture selon votre modèle

            pdf.showPage()
            pdf.save()

            # Renvoyer le PDF en réponse HTTP
            
            return response
        except Facture.DoesNotExist:
            return HttpResponse('La facture demandée n\'existe pas.', status=404)
'''