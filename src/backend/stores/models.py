from django.db import models
import uuid
from email.policy import default
from django.contrib.auth.models import User
from users.models import Customer


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


class Product(models.Model):
    product_id = models.UUIDField(
        default=uuid.uuid4, editable=False, primary_key=True, unique=True
    )
    name = models.CharField(max_length=100)
    description = models.TextField()
    discount = models.BooleanField()
    slug = models.SlugField(default=None)
    image = models.ImageField(
        upload_to="img",
        blank=True,
        null=True,
    )
    old_price = models.FloatField(default=100.00)
    inventory = models.IntegerField(default=5)
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name="products",
    )

    @property
    def price(self):
        return (
            self.old_price
            if not self.discount
            else self.old_price - ((30 / 100) * self.old_price)
        )

    @property
    def img(self):
        if self.image == "":
            self.image = ""
        return self.image

    def __str__(self) -> str:
        return self.name


class Cart(models.Model):
    owner = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)
    cart_id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    session_id = models.CharField(max_length=100)

    @property
    def num_of_items(self):
        cartitems = self.cartitems_set.all()
        qtysum = sum([qty.quantity for qty in cartitems])
        return qtysum

    @property
    def cart_total(self):
        cartitems = self.cartitems_set.all()
        qtysum = sum([qty.subTotal for qty in cartitems])
        return qtysum

    def __str__(self) -> str:
        return str(self.cart_id)


class Cartitem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, blank=True, null=True)
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name="cartitems",
    )
    quantity = models.IntegerField(default=0)

    @property
    def subTotal(self):
        return self.quantity * self.product.price


class SavedItem(models.Model):
    owner = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, blank=True, null=True
    )
    added = models.IntegerField(default=0)

    def __str__(self):
        return str(self.id)
