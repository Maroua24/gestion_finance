from django.db import models
from commandes.models import Commande
from produits.models import Produit

class Commande_ligne(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE, related_name='commande_lignes')
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE, related_name='commande_lignes')
    quantity = models.PositiveIntegerField(default=1) 

    class Meta:
        unique_together = (('commande', 'produit'),)  # Ensure uniqueness of product within an order
