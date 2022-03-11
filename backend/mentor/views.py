from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializers import MentorsSerializer
from .models import Mentors


class MentorsViewSet(viewsets.ModelViewSet):
    queryset = Mentors.objects.all().order_by('id')
    serializer_class = MentorsSerializer