from django.db import models
import uuid
from email.policy import default
from django.contrib.auth.models import User


class Category(models.Model):
    title = models.CharField(max_length=200)
    category_id = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        primary_key=True,
        unique=True,
    )
    featured_product = models.OneToOneField(
        "Product",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="featured_product",
    )
    slug = models.SlugField(default=None)
    icon = models.CharField(max_length=100, default=None, blank=True, null=True)

    def __str__(self):
        return self.title


class Review(models.Model):
    product = models.ForeignKey(
        "Product", on_delete=models.CASCADE, related_name="reviews"
    )
    date_created = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.description


class Product(models.Model):
    product_id = models.UUIDField(
        default=uuid.uuid4, editable=False, primary_key=True, unique=True
    )
    name = models.CharField(max_length=100)
    description = models.TextField()
    slug = models.SlugField(default=None, blank=True, null=True)
    image = models.ImageField(
        upload_to="img",
        blank=True,
        null=True,
    )
    price = models.FloatField(default=100.00)
    inventory = models.IntegerField(default=5)
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name="products",
    )

    def __str__(self) -> str:
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(upload_to="img", default="", null=True, blank=True)


class Cart(models.Model):
    cart_id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return str(self.cart_id)


class Cartitem(models.Model):
    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        related_name="items",
        null=True,
        blank=True,
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="cartitems",
    )
    quantity = models.IntegerField(default=0)


# class SavedItem(models.Model):
#     owner = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)
#     product = models.ForeignKey(
#         Product, on_delete=models.CASCADE, blank=True, null=True
#     )
#     added = models.IntegerField(default=0)

#     def __str__(self):
#         return str(self.id)
