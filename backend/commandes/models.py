from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from clients.models import Client

from produits.models import Produit
   
class Commande(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE , related_name='commandes_client')
    tva = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    date_commande=models.DateField()
    pht = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    mtva = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    tht = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    ttva = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    ttc = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    est_promo = models.BooleanField(default=False)
    code_promo = models.CharField(max_length=50, blank=True, null=True)
    
    produits = models.ManyToManyField(Produit, through='commandes.Commande_ligne')
    
    def calculer_pht(self):
        ligne_commande = self.commande_ligne.all()
        pht_total = sum(ligne.produit.prix_unitaire * ligne.quantite for ligne in ligne_commande)
        self.pht = pht_total
        self.save()

    @receiver(pre_save, sender='commandes.Commande_ligne')
    def update_pht(sender, instance, **kwargs):
        instance.commande.calculer_pht()  # Update PHT when a Commande_ligne instance is saved

@receiver(pre_save, sender=Commande)
def update_tva(sender, instance, **kwargs):
    if instance.client:
        instance.tva = instance.client.code_tva  # Remplit automatiquement le champ tva avec le tva du client associé

def update_fields(sender, instance, **kwargs):
    if instance.pht is not None and instance.tva is not None:
        instance.mtva = instance.pht * instance.tva / 100
    else:
        instance.mtva = None
    instance.tht = instance.pht
    instance.ttva = instance.mtva


class Commande_ligne(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1) 

    class Meta:
        unique_together = (('commande', 'produit'),)  # Ensure uniqueness of product within an order
    