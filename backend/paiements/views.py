from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Paiement 
from .serializers import PaiementSerializer , PaiementSerializer
from factures.models import Facture
from rest_framework.views import APIView
from decimal import Decimal, InvalidOperation

class ListePaiements(generics.ListAPIView):
    queryset = Paiement.objects.all()
    serializer_class = PaiementSerializer


class PaiementCreateView(APIView):
    
    def post(self, request, pk):
        facture = get_object_or_404(Facture, pk=pk)
        
        if facture.non_payee:
            creer_par = request.user 
            etat = request.data.get('etat')
            est_annule = request.data.get('est_annule')
            mode_reglement = request.data.get('mode_reglement')
            commentaire = request.data.get('commentaire')

            if etat == 'partiel':
                montant = Decimal(facture.montant)
                montant_p = request.data.get('montant_partiel')

                try:
                    montant_partiel = Decimal(montant_p)
                except (TypeError, ValueError, InvalidOperation):
                    return Response({'error': 'Montant partiel invalide.'}, status=status.HTTP_400_BAD_REQUEST)

                
                if montant_partiel and montant_partiel <= montant:
                    montant_partiel = montant_partiel
                    reste_a_payer = montant - montant_partiel
                    montant -= montant_partiel
                    facture.montant = montant
                    facture.save()
                else:
                    return Response({'error': 'Montant partiel incorrect.'}, status=status.HTTP_400_BAD_REQUEST)
            elif etat == 'complet':
                montant = facture.montant
                reste_a_payer = 0
            else:
                return Response({'error': 'État de paiement invalide.'}, status=status.HTTP_400_BAD_REQUEST)

            devise = facture.client.devise
            paiement = Paiement.objects.create(
                facture=facture,
                montant=montant,
                devise=devise,
                creer_par=creer_par,
                etat=etat,
                est_annule=est_annule,
                mode_reglement=mode_reglement,
                commentaire=commentaire,
                montant_partiel = montant_partiel if etat == 'partiel' else None
            )
            if reste_a_payer == 0 : 
             facture.non_payee = False
            facture.save()

            serializer = PaiementSerializer(paiement)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'La facture est déjà payée.'}, status=status.HTTP_400_BAD_REQUEST)



class PaiementPartielDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Paiement.objects.all()
    serializer_class = PaiementSerializer

class PaiementPartielList(generics.ListAPIView):
    queryset = Paiement.objects.filter(etat='partiel')
    serializer_class = PaiementSerializer

class PaiementCompletList(generics.ListAPIView):
    queryset = Paiement.objects.filter(etat='complet')
    serializer_class = PaiementSerializer 


class RapportPaiementView(APIView):
    def get(self, request, *args, **kwargs):
        paiements = Paiement.objects.all()
        paiements_data = []
        for paiement in paiements:
            paiement_dict = {
                'id_paiement': paiement.id_paiement,
                'date_paiement': paiement.date_paiement.strftime('%Y-%m-%d'),
                'facture': paiement.facture.facture_id,  # Supposons que Facture ait un champ id_facture
                'montant': paiement.montant,
                'montant_partiel': paiement.montant_partiel,
                'creer_par': paiement.creer_par.username if paiement.creer_par else '',
                'est_annule': paiement.est_annule,
                'etat': paiement.etat,
                'mode_reglement': paiement.mode_reglement,
                'devise': paiement.devise.devise if paiement.devise else '',
                'commentaire': paiement.commentaire,
            }
            paiements_data.append(paiement_dict)

        return Response({ 'data': paiements_data}) 