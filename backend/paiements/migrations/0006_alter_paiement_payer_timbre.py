# Generated by Django 5.0.3 on 2024-06-01 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paiements', '0005_paiement_cib_paiement_numero_carte_cib_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paiement',
            name='payer_timbre',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
