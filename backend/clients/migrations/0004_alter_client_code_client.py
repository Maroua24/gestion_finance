# Generated by Django 5.0.3 on 2024-06-01 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0003_client_code_client'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='code_client',
            field=models.CharField(editable=False, max_length=20, unique=True),
        ),
    ]