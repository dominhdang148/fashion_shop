from django.db import models
import uuid


class Category(models.Model):
    title = models.CharField(max_length=200)
    category_id = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        primary_key=True,
        unique=True,
    )
    slug = models.SlugField(default=None)
    icon = models.CharField(max_length=100, default=None, blank=True, null=True)


class Product(models.Model):
    product_id = models.UUIDField(
        default=uuid.uuid4, editable=False, primary_key=True, unique=True
    )
    name = models.CharField(max_length=100)
    description = models.TextField()
    slug = models.SlugField(default=None)
    price = models.DecimalField(max_digits=6, decimal_places=2)
