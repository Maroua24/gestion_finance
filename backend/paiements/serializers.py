from rest_framework import serializers
from .models import Paiement 
from devises.serializers import DeviseSerializer         

class PaiementSerializer(serializers.ModelSerializer):
    devise = DeviseSerializer()
    cree_par = serializers.ReadOnlyField(source='cree_par.username') 
    class Meta:
        model = Paiement
        fields = [
            'id_paiement', 'date_paiement', 'facture', 'cree_par', 'montant', 'montant_partiel', 
            'est_annule', 'etat', 'mode_reglement', 'devise', 'commentaire', 'payer_timbre', 
            'veuillez_choisir_banque_cheque', 'numero_cheque', 'veuillez_choisir_banque_virement', 
            'virement', 'cib', 'numero_carte_cib', 'preciser'
        ]
        read_only_fields = ['montant', 'montant_partiel', 'mode_reglement', 'devise', 'commentaire']
        extra_kwargs = {
            'est_annule': {'required': True},
            'etat': {'required': True},
        }

    def validate(self, data):
        etat = data.get('etat')
        if etat == 'complet' and not data.get('montant'):
            raise serializers.ValidationError({'montant': 'Le montant est obligatoire pour un paiement complet.'})
        elif etat == 'partiel' and not data.get('montant_partiel'):
            raise serializers.ValidationError({'montant_partiel': 'Le montant partiel est obligatoire pour un paiement partiel.'})
        return data