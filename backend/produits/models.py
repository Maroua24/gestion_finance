from django.db import models


class Produit (models.Model):
    nom=models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=50, blank=True, null=True)
    prix_unitaire=models.DecimalField (max_digits=10 , decimal_places=2)