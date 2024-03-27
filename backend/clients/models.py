from django.db import models

class Client(models.Model):
    
    etat_dossier = (
        ('Y', ('Yes')),
        ('N', ('No')),
    )
 
    etat_statut= (
        ('A', ('Active')),
        ('I', ('Inactive')),
    )

    categorie = (
        ('C', ('Client')),
        ('S', ('Supplier')),
    )

    #id = models.CharField(max_length=100 , primary_key=True)

    categorie_compte  = models.CharField(max_length=10, choices=categorie)

    raison_sociale = models.CharField(max_length=64)

    sigle = models.CharField(max_length=64)

    code_tva = models.CharField(max_length=100)

    nature_compte = models.CharField(max_length=100)

    nif = models.CharField(max_length=100)

    nis = models.CharField(max_length=100)

    registre_commerce = models.CharField(max_length=100)

    article_imposition = models.CharField(max_length=100)

    devise = models.CharField(max_length=100)

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

    cree_par =  models.CharField(max_length=100)

    nom = models.CharField(max_length=100, blank=False)

    prenom = models.CharField(max_length=100, blank=False)

    fonction = models.CharField(max_length=100)

    type_client = models.CharField(max_length=100)

    fax = models.CharField(max_length=100, blank=False)

    dossier_valide = models.CharField(max_length=1, choices=etat_dossier)

    statut = models.CharField(max_length=1, choices=etat_statut)

    class Meta: 
        verbose_name = "client"
        verbose_name_plural = "clients"

    def __str__(self): #représenter chaque instance de Client avec son nom
        return self.name