# Generated by Django 4.2 on 2023-05-06 20:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='discount',
        ),
    ]