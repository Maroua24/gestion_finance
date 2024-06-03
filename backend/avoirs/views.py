from rest_framework.generics import RetrieveAPIView, UpdateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework import status

from clients.serializers import InfoClientSerializer
from commandes.serializers import Commande_ligneSerializer
from .models import Avoir 
from .serializers import AvoirSerializer, AvoirDetailSerializer
from factures.models import Facture
from django.http import Http404
from factures.serializers import FactureAvoirSerializer

from rest_framework import generics 
from rest_framework.generics import RetrieveAPIView, UpdateAPIView, get_object_or_404 , CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Avoir
from .serializers import AvoirSerializer, AvoirDetailSerializer , CreateAvoirSerializer
from factures.models import Facture
from clients.serializers import InfoClientSerializer
from commandes.serializers import Commande_ligneSerializer
from rest_framework.views import APIView
from commandes.models import Commande_ligne
from django.shortcuts import get_object_or_404
from decimal import Decimal 

class AvoirDetailAndCreateAPIView(RetrieveAPIView, UpdateAPIView):
    queryset = Avoir.objects.all()
    serializer_class_detail = FactureAvoirSerializer
    serializer_class_create = FactureAvoirSerializer

    def get_serializer_class(self):
        if self.request.method == 'PUT':
            return self.serializer_class_create
        return self.serializer_class_detail

    def get_facture_info(self, facture_id):
        return get_object_or_404(Facture, pk=facture_id)

    def get(self, request, *args, **kwargs):
        facture_id = self.kwargs.get('pk')
        facture = self.get_facture_info(facture_id)

        # Retournez toujours un serializer pré-rempli avec les informations de cette facture
        serializer = self.serializer_class_create(facture)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        facture_id = self.kwargs.get('pk')
        facture = self.get_facture_info(facture_id)
        
        # Valider les données de l'avoir
        serializer = self.serializer_class_create(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Extraire les données validées
        validated_data = serializer.validated_data

        
        
        # Créer l'avoir en utilisant les objets associés et les données validées
        avoir = Avoir.objects.create(
            facture=facture,
            client=facture.client,
            #commande_ligne=validated_data.get('commande_ligne'),
            type_facture=validated_data.get('type_facture'),
            avoir_id=validated_data.get('avoir_id'),
            date_comptabilisation=validated_data.get('date_comptabilisation'),
            date_decheance=validated_data.get('date_decheance'),
            non_payee=validated_data.get('non_payee'),
            montant=validated_data.get('montant')
        )
        
        # Associer les commandes lignes à cet avoir en utilisant la méthode set()
        if 'commande_ligne' in validated_data:
          commande_lignes = validated_data.get('commande_ligne')
          avoir.commande_ligne.set(commande_lignes)


        return Response(AvoirSerializer(avoir).data, status=status.HTTP_201_CREATED)
    

class RapportAvoirsVenteView(APIView):
    def get(self, request, *args, **kwargs):
        
        # Récupération des données des avoirs
        avoirs = Avoir.objects.filter(type_facture='Vente')
        avoirs_data = []
        for avoir in avoirs:
            commande_lignes = ", ".join([f"{ligne.produit.nom} x {ligne.quantity}" for ligne in avoir.commande_ligne.all()])
            avoir_data = {
                'avoir_id': avoir.avoir_id,
                'type_facture': avoir.type_facture,
                'client': avoir.client.nom,
                'date_creation': avoir.date_creation.strftime('%Y-%m-%d'),
                'date_comptabilisation': avoir.date_comptabilisation.strftime('%Y-%m-%d') if avoir.date_comptabilisation else '',
                'date_decheance': avoir.date_decheance.strftime('%Y-%m-%d') if avoir.date_decheance else '',
                'non_payee': 'Oui' if avoir.non_payee else 'Non',
                'montant': str(avoir.montant),
                'commande_lignes': commande_lignes
            }
            avoirs_data.append(avoir_data)

        # Envoi des données sous forme de JSON
        return Response( avoirs_data)
    
class RapportAvoirsServiceView(APIView):
    def get(self, request, *args, **kwargs):
        
        # Récupération des données des avoirs 
        avoirs = Avoir.objects.filter(type_facture='Service')
        avoirs_data = []
        for avoir in avoirs:
            commande_lignes = ", ".join([f"{ligne.produit.nom} x {ligne.quantity}" for ligne in avoir.commande_ligne.all()])
            avoir_data = {
                'avoir_id': avoir.avoir_id,
                'type_facture': avoir.type_facture,
                'client': avoir.client.nom,
                'date_creation': avoir.date_creation.strftime('%Y-%m-%d'),
                'date_comptabilisation': avoir.date_comptabilisation.strftime('%Y-%m-%d') if avoir.date_comptabilisation else '',
                'date_decheance': avoir.date_decheance.strftime('%Y-%m-%d') if avoir.date_decheance else '',
                'non_payee': 'Oui' if avoir.non_payee else 'Non',
                'montant': str(avoir.montant),
                'commande_lignes': commande_lignes
            }
            avoirs_data.append(avoir_data)

        # Envoi des données sous forme de JSON
        return Response(avoirs_data)
    
 
class PDFAvoirView(APIView):
    def get(self, request, id, *args, **kwargs):
        try:
            avoir = Avoir.objects.get(id=id)
            commande_lignes = avoir.commande_ligne.all()

            # Préparation des données
            data = {
                'id_avoir': avoir.avoir_id,
                'code_client': avoir.client.code_client,
                'client': avoir.client.nom,
                'raison_sociale' : avoir.client.raison_sociale ,
                'rue': avoir.client.rue,
                'ville': avoir.client.ville,
                'pays': avoir.client.pays,
                'nif': avoir.client.nif,
                'nis': avoir.client.nis,
                'date_creation': avoir.date_creation,
                'date_comptabilisation': avoir.date_comptabilisation,
                'date_decheance': avoir.date_decheance,
                'produits': [],
                'total_ht': 0,
                'tva': avoir.client.code_tva,
                'devise': str(avoir.client.devise),
            }

            total_ht = Decimal('0')

            for commande_ligne in commande_lignes:
                produit = commande_ligne.produit
                commande = commande_ligne.commande
                montant = produit.prix_unitaire * commande_ligne.quantity

                data['produits'].append({
                    'nom': produit.nom,
                    'prix_unitaire': f"{produit.prix_unitaire:.2f}",
                    'quantite': commande_ligne.quantity,
                    'montant' : f"{montant}",
                    'tva': f"{avoir.client.code_tva}%",
                })

                total_ht += montant

            data['total_ht'] = f"{total_ht:.2f}"
            data['ttc'] = f"{total_ht + (total_ht * Decimal(avoir.client.code_tva) / Decimal('100')):.2f}"

            return Response(data, status=status.HTTP_200_OK)
        except Avoir.DoesNotExist:
            return Response({'error': 'L\'avoir demandé n\'existe pas.'}, status=status.HTTP_404_NOT_FOUND)

class AvoirListAPIView(ListAPIView):
    queryset = Avoir.objects.all()
    serializer_class = AvoirSerializer

class AvoirVenteListAPIView(ListAPIView):
    serializer_class = AvoirSerializer

    def get_queryset(self):
        return Avoir.objects.filter(type_facture='Vente')

class AvoirServiceListAPIView(ListAPIView):
    serializer_class = AvoirSerializer

    def get_queryset(self):
        return Avoir.objects.filter(type_facture='Service')
    
class AvoirVenteDetail(RetrieveAPIView):
    queryset = Avoir.objects.filter(type_facture='Vente')
    serializer_class = AvoirSerializer

class AvoirServiceDetail(RetrieveAPIView):
    queryset = Avoir.objects.filter(type_facture='Service')
    serializer_class = AvoirSerializer 

class AvoirDetail(RetrieveAPIView):
    queryset = Avoir.objects.all()
    serializer_class = AvoirSerializer