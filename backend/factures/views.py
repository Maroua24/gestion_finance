from django.shortcuts import render
from rest_framework.generics import ListAPIView,  CreateAPIView, RetrieveAPIView
from rest_framework import generics
from .models import Facture
from .serializers import FactureSerializer , FactureAjoutSerializer

from decimal import Decimal 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from avoirs.serializers import AvoirSerializer
from avoirs.models import Avoir

class RapportFacturesVenteView(APIView):
    def get(self, request, *args, **kwargs):
        
        factures_vente = Facture.objects.filter(type_facture='Vente')
        factures_data = []
        for facture in factures_vente:
            commande_lignes = ", ".join([f"{ligne.produit.nom} x {ligne.quantity}" for ligne in facture.commande_ligne.all()])
            facture_data = {
                'facture_id': facture.facture_id,
                'client': facture.client.nom,
                'date_creation': facture.date_creation.strftime('%Y-%m-%d'),
                'date_comptabilisation': facture.date_comptabilisation.strftime('%Y-%m-%d') if facture.date_comptabilisation else '',
                'date_decheance': facture.date_decheance.strftime('%Y-%m-%d') if facture.date_decheance else '',
                'non_payee': 'Oui' if facture.non_payee else 'Non',
                'montant': str(facture.montant),
                'commande_lignes': commande_lignes
            }
            factures_data.append(facture_data)

        return Response(factures_data)

class RapportFacturesServiceView(APIView):
    def get(self, request, *args, **kwargs):
        
        factures_service = Facture.objects.filter(type_facture='Service')
        factures_data = []
        for facture in factures_service:
            commande_lignes = ", ".join([f"{ligne.produit.nom} x {ligne.quantity}" for ligne in facture.commande_ligne.all()])
            facture_data = {
                'facture_id': facture.facture_id,
                'client': facture.client.nom,
                
                'date_creation': facture.date_creation.strftime('%Y-%m-%d'),
                'date_comptabilisation': facture.date_comptabilisation.strftime('%Y-%m-%d') if facture.date_comptabilisation else '',
                'date_decheance': facture.date_decheance.strftime('%Y-%m-%d') if facture.date_decheance else '',
                'non_payee': 'Oui' if facture.non_payee else 'Non',
                'montant': str(facture.montant),
                'commande_lignes': commande_lignes
            }
            factures_data.append(facture_data)

        return Response(factures_data)

class RapportFacturesNonPayeeView(APIView):
    def get(self, request, *args, **kwargs):
        
        factures_service = Facture.objects.filter(non_payee=True)
        factures_data = []
        for facture in factures_service:
            commande_lignes = ", ".join([f"{ligne.produit.nom} x {ligne.quantity}" for ligne in facture.commande_ligne.all()])
            facture_data = {
                'facture_id': facture.facture_id,
                'client': facture.client.nom,
                
                'date_creation': facture.date_creation.strftime('%Y-%m-%d'),
                'date_comptabilisation': facture.date_comptabilisation.strftime('%Y-%m-%d') if facture.date_comptabilisation else '',
                'date_decheance': facture.date_decheance.strftime('%Y-%m-%d') if facture.date_decheance else '',
                'non_payee': 'Oui' if facture.non_payee else 'Non',
                'montant': str(facture.montant),
                'commande_lignes': commande_lignes
            }
            factures_data.append(facture_data)

        return Response(factures_data)


class PDFFactureView(APIView):
    def get(self, request, id, *args, **kwargs):
        try:
            facture = Facture.objects.get(id=id)
            commande_lignes = facture.commande_ligne.all()

            data = {
                'id_facture': facture.facture_id,
                'code_client': facture.client.code_client,
                'client': facture.client.nom,
                'raison_sociale' : facture.client.raison_sociale ,
                'rue': facture.client.rue,
                'ville': facture.client.ville,
                'pays': facture.client.pays,
                'nif': facture.client.nif,
                'nis': facture.client.nis,
                'date_creation': facture.date_creation,
                'date_comptabilisation': facture.date_comptabilisation,
                'date_decheance': facture.date_decheance,
                'produits': [],
                'total_ht': 0,
                'tva': facture.client.code_tva,
                
                'devise': str(facture.client.devise),
                
            }

            total_ht = Decimal('0')

            for commande_ligne in commande_lignes:
                produit = commande_ligne.produit
                commande = commande_ligne.commande
                # pht = Decimal(commande.pht)
                #tva = pht * Decimal(facture.client.code_tva) / Decimal('100')
                #ttc = pht + tva
                montant = produit.prix_unitaire * commande_ligne.quantity

                data['produits'].append({
                    'nom': produit.nom,
                    'prix_unitaire': f"{produit.prix_unitaire:.2f}",
                    'quantite': commande_ligne.quantity,
                    'montant' : f"{montant}",
                    'tva': f"{facture.client.code_tva}%",
                    # 'pht': f"{pht:.2f}",
                    # 'ttc': f"{ttc:.2f}"
                })

                total_ht += montant

            data['total_ht'] = f"{total_ht:.2f}"
            #data['tva'] = f"{total_ht * Decimal(facture.client.code_tva) / Decimal('100'):.2f}"
            #data['montant'] = f"{total_ht * Decimal(facture.client.code_tva) / Decimal('100'):.2f}"
            data['ttc'] = f"{total_ht + (total_ht * Decimal(facture.client.code_tva) / Decimal('100')):.2f}"

            return Response(data, status=status.HTTP_200_OK)
        except Facture.DoesNotExist:
            return Response({'error': 'La facture demandée n\'existe pas.'}, status=status.HTTP_404_NOT_FOUND)

# class PDFFactureView(View):
#     def get(self, request, id, *args, **kwargs):
#         try:
#             facture = Facture.objects.get(id=id)
#             commande_lignes = facture.commande_ligne.all()

#             buffer = BytesIO()

#             pdf = canvas.Canvas(buffer, pagesize=A4)
            
#             pdf.drawString(25, 800, f"ID Facture: {facture.facture_id}")
#             pdf.drawString(25, 780, f"Client: {facture.client.nom}")
#             pdf.drawString(25, 760, f"Date de création: {facture.date_creation}")
#             pdf.drawString(25, 740, f"Date de comptabilisation: {facture.date_comptabilisation}")
#             pdf.drawString(25, 720, f"Date de déchéance: {facture.date_decheance}")

           
#             pdf.drawString(25, 660, "Produit")
#             pdf.drawString(115, 660, "Prix unitaire")
#             pdf.drawString(205, 660, "Quantité")
#             pdf.drawString(295,660,"TVA")
#             pdf.drawString(385, 660, "PHT")
#             pdf.drawString(475, 660, "PTC") 

            
#             y_position = 630
#             total_pht = Decimal('0')

             
#             for commande_ligne in commande_lignes:
#                 produit = commande_ligne.produit
#                 commande = commande_ligne.commande

#                 pdf.drawString(20, y_position, produit.nom)
#                 pdf.drawString(125, y_position, f"{produit.prix_unitaire:.2f} ")
#                 pdf.drawString(230, y_position, str(commande_ligne.quantity))
#                 pdf.drawString(295, y_position, f"{facture.client.code_tva}%")
#                 pdf.drawString(380, y_position, f"{commande.pht:.2f} ")
#                 pdf.drawString(470, y_position, f"{commande.ttc:.2f} ")

#                 total_pht += Decimal(commande.pht)
#                 y_position -= 20  

#             pdf.drawString(385, y_position-10, "THT:")
#             pdf.drawString(385, y_position-25, "TVA:  ")
#             pdf.drawString(385, y_position-40, "TTC: ")

#             pdf.drawString(420, y_position-10, f" {total_pht:.2f} {facture.client.devise} ")
#             pdf.drawString(420, y_position-25, f" {total_pht * Decimal(facture.client.code_tva) / Decimal('100'):.2f} {facture.client.devise} ")
#             pdf.drawString(420, y_position-40, f" {total_pht + (total_pht * Decimal(facture.client.code_tva) / Decimal('100')):.2f} {facture.client.devise} ")
              
#             pdf.showPage()
#             pdf.save()

#             pdf_data = buffer.getvalue()

#             response = HttpResponse(pdf_data, content_type='application/pdf')
#             response['Content-Disposition'] = 'inline; filename="facture.pdf"'
#             # pour le téléchargement automatique
#             #response['Content-Disposition'] = f'attachment; filename="facture_{id}.pdf"'

#             return response
#         except Facture.DoesNotExist:
#             return HttpResponse('La facture demandée n\'existe pas.', status=404)

class AvoirsFacturesAPIView(ListAPIView):
    serializer_class = AvoirSerializer

    def get_queryset(self):
        facture_id = self.kwargs['pk']
        return Avoir.objects.filter(facture_id=facture_id)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if queryset.exists():
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        else:
            return Response({"detail": "Aucun avoir trouvé pour cette facture."}, status=status.HTTP_404_NOT_FOUND)

class FactureListView(ListAPIView):
    serializer_class = FactureSerializer

    def get_queryset(self):
        return Facture.objects.filter(avoirs__isnull=True)

class FactureVenteDetail(RetrieveAPIView):
    queryset = Facture.objects.filter(type_facture='Vente')
    serializer_class = FactureSerializer

class FactureServiceDetail(RetrieveAPIView):
    queryset = Facture.objects.filter(type_facture='Service')
    serializer_class = FactureSerializer

class FactureDetail(RetrieveAPIView):
    queryset = Facture.objects.all()
    serializer_class = FactureSerializer
    
class FactureNonPayeeDetail(RetrieveAPIView):
    queryset = Facture.objects.filter(non_payee=True)
    serializer_class = FactureSerializer

class FactureListCreate(CreateAPIView):
    queryset = Facture.objects.all()
    serializer_class = FactureAjoutSerializer


class FactureVenteList(generics.ListAPIView):
    queryset = Facture.objects.filter(type_facture='Vente')
    serializer_class = FactureSerializer

class FactureServiceList(generics.ListAPIView):
    queryset = Facture.objects.filter(type_facture='Service')
    serializer_class = FactureSerializer

class FactureNonPayeeList(generics.ListAPIView):
    serializer_class = FactureSerializer

    def get_queryset(self):
        return Facture.objects.filter(non_payee=True)
    


