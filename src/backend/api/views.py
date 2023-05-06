from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from .serializers import *
from stores.models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .filters import *
from rest_framework.pagination import PageNumberPagination
from rest_framework.mixins import (
    CreateModelMixin,
    RetrieveModelMixin,
    DestroyModelMixin,
)

# Create your views here.


# Products


class ProductsViewSet(ModelViewSet):
    queryset = products = Product.objects.all()
    serializer_class = ProductSerializer

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]
    filterset_class = ProductFilter
    search_fields = [
        "name",
        "description",
    ]
    ordering_fields = ["old_price"]
    pagination_class = PageNumberPagination


# Category


class CategoriesViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# Review


class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(product_id=self.kwargs["product_pk"])

    def get_serializer_context(self):
        return {"product_id": self.kwargs["product_pk"]}


# Cart


class CartViewSet(
    CreateModelMixin, RetrieveModelMixin, DestroyModelMixin, GenericViewSet
):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartitemViewSet(ModelViewSet):
    http_method_names = [
        "get",
        "post",
        "patch",
        "delete",
    ]

    def get_queryset(self):
        return Cartitem.objects.filter(cart_id=self.kwargs["cart_pk"])

    def get_serializer_class(self):
        if self.request.method == "POST":
            return AddCardItemSerializer
        if self.request.method == "PATCH":
            return UpdateCartItemSerializer
        return CartitemSerializer

    def get_serializer_context(self):
        return {"cart_id": self.kwargs["cart_pk"]}
