from django.db import models

from devises.models import Devise

class Client(models.Model):
    etat_dossier = (
        ('Valide', 'Valide'),
        ('Non valide', 'Non valide'),
    )

    etat_statut= (
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
    )

    categorie = (
        ('Client', 'Client'),
        ('Supplier', 'Supplier'),
    )


    code_client = models.CharField(max_length=20, unique=True, editable=False)
    categorie_compte  = models.CharField(max_length=10, choices=categorie)
    raison_sociale = models.CharField(max_length=64)
    sigle = models.CharField(max_length=64)
    code_tva = models.CharField(max_length=100)
    nature_compte = models.CharField(max_length=100)
    nif = models.CharField(max_length=100)
    nis = models.CharField(max_length=100)
    registre_commerce = models.CharField(max_length=100)
    article_imposition = models.CharField(max_length=100)
    devise = models.ForeignKey(Devise, on_delete=models.CASCADE, default='EUR')
    rue = models.CharField(max_length=100)
    ville = models.CharField(max_length=100)  
    region = models.CharField(max_length=100)
    type_de_region = models.CharField(max_length=100)
    code_postale = models.CharField(max_length=100)
    pays = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100 , blank=False)
    email = models.EmailField(blank=False)
    secteur_activite = models.CharField(max_length=100)
    condition_paiement = models.CharField(max_length=100)
    cree_le = models.DateTimeField(auto_now_add=True)
    nom = models.CharField(max_length=100, blank=False)
    prenom = models.CharField(max_length=100, blank=False)
    fonction = models.CharField(max_length=100)
    type_client = models.CharField(max_length=100)
    fax = models.CharField(max_length=100, blank=False)
    dossier_valide = models.BooleanField(default=False)
    statut = models.CharField(max_length=10, choices=etat_statut)
    est_vip = models.BooleanField(default=False) 
    creer_par = models.ForeignKey('auth.User', on_delete=models.CASCADE, null=True, blank=True , related_name='client')


    def generate_code(self):
        last_invoice_number = self.get_last_invoice_number() + 1
        prefix = 'C'
        return f"{prefix}{last_invoice_number:04d}"

    @classmethod
    def get_last_invoice_number(cls):
        last_invoice = cls.objects.order_by('-code_client').first()
        if last_invoice and last_invoice.code_client.startswith('C'):
            return int(last_invoice.code_client[1:])
        return 0

    def save(self, *args, **kwargs):
        if not self.code_client:
            self.code_client = self.generate_code()
        super().save(*args, **kwargs)

    class Meta: 
        verbose_name = "client"
        verbose_name_plural = "clients"

    def __str__(self): 
        return self.nom 

