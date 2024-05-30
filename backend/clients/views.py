from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView,  DestroyAPIView
from .models import Client
from .serializers import ClientSerializer , ClientAjoutSerializer

from rest_framework.permissions import AllowAny,IsAuthenticated ,IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import permissions

from rest_framework import status
from rest_framework import generics 

from factures.models import Facture
from factures.serializers import FactureSerializer

from paiements.models import Paiement
from paiements.serializers import PaiementSerializer
from rest_framework.views import APIView

from rest_framework.views import APIView
from rest_framework.response import Response
from clients.models import Client

class RapportClientsView(APIView):
    def get(self, request, *args, **kwargs):
        
        clients = Client.objects.all()
        clients_data = []
        for client in clients:
            client_data = {
                'raison_sociale': client.raison_sociale,
                'sigle': client.sigle,
                'code_tva': client.code_tva,
                'nature_compte': client.nature_compte,
                'nif': client.nif,
                'nis': client.nis,
                'registre_commerce': client.registre_commerce,
                'article_imposition': client.article_imposition,
                'devise': client.devise.devise,  # Utilisation du bon attribut
                'rue': client.rue,
                'ville': client.ville,
                'region': client.region,
                'type_de_region': client.type_de_region,
                'code_postale': client.code_postale,
                'pays': client.pays,
                'telephone': client.telephone,
                'email': client.email,
                'secteur_activite': client.secteur_activite,
                'condition_paiement': client.condition_paiement,
                'nom': client.nom,
                'prenom': client.prenom,
                'fonction': client.fonction,
                'type_client': client.type_client,
                'fax': client.fax,
                'dossier_valide': 'Oui' if client.dossier_valide else 'Non',
                'statut': client.statut,
                'est_vip': 'Oui' if client.est_vip else 'Non',
                'creer_par': client.creer_par.username if client.creer_par else '',
                'cree_le': client.cree_le.strftime('%Y-%m-%d %H:%M:%S') if client.cree_le else ''
            }
            clients_data.append(client_data)

        # Envoi des données sous forme de JSON
        return Response({ 'data': clients_data})



class HistouriqueView(APIView):
    def get(self, request, client_id):
        # Récupère toutes les factures du client
        factures = Facture.objects.filter(client_id=client_id)
        factures_serializer = FactureSerializer(factures, many=True)

        # Récupère tous les paiements du client
        paiements = Paiement.objects.filter(facture__client_id=client_id)
        paiements_serializer = PaiementSerializer(paiements, many=True)

        # Crée une réponse JSON contenant les factures et les paiements
        data = {
            'factures': factures_serializer.data,
            'paiements': paiements_serializer.data,
        }
        return Response(data)

class PaiementHistoryView(APIView):
    def get(self, request, client_id):
        # Récupère toutes les factures du client
        factures = Facture.objects.filter(client_id=client_id)

        # Initialise une liste vide pour stocker les paiements
        paiements = []

        # Pour chaque facture du client, récupère tous les paiements associés
        for facture in factures:
            paiements_facture = Paiement.objects.filter(facture=facture)
            paiements.extend(paiements_facture)

        # Serialize les paiements récupérés
        serializer = PaiementSerializer(paiements, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PaiementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FacturesClientAPIView(ListAPIView):
    serializer_class = FactureSerializer

    def get_queryset(self):
        
        client_id = self.kwargs['client_id']
        return Facture.objects.filter(client_id=client_id)

class ClientListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    def perform_create(self, serializer):
      serializer.save(creer_par=self.request.user)

class ClientDetailView(generics.RetrieveUpdateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    
    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 

class ClientCreateView(CreateAPIView):
    # permission_classes = (AllowAny,)
    permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientAjoutSerializer

    def perform_create(self, serializer):
      serializer.save(creer_par=self.request.user) 

class ClientDeleteView(DestroyAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    lookup_field = 'pk'

class VueListeClientsVIP(generics.ListAPIView):
    serializer_class = ClientSerializer

    def get_queryset(self):
        return Client.objects.filter(est_vip=True)