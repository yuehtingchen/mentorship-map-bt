from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializers import UsersSerializer
from .models import Users


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('id')
    serializer_class = UsersSerializer