from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializers import UsersSerializer
from .models import User


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UsersSerializer