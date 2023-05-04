from django_filters.rest_framework import FilterSet
from stores.models import *


class ProductFilter(FilterSet):
    class Meta:
        model = Product
        fields = {
            "category_id": ["exact"],
            "price": ["gt", "lt"],
        }
