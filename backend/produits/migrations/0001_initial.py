# Generated by Django 5.0.3 on 2024-04-28 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(blank=True, max_length=50, null=True)),
                ('description', models.CharField(blank=True, max_length=50, null=True)),
                ('prix_unitaire', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
