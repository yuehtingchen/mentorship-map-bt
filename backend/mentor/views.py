from argparse import Action
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import action


# Create your views here.

from rest_framework import viewsets

from .serializers import MentorsSerializer, TableSerializer
from .models import Mentors
from rest_framework.response import Response



class MentorsViewSet(viewsets.ModelViewSet):
    queryset = Mentors.objects.all().order_by('id')
    serializer_class = MentorsSerializer

class TableViewSet(viewsets.ModelViewSet):
    queryset = Mentors.objects.all().order_by('id')
    serializer_class = TableSerializer

    def list(self, request):
        queryset = Mentors.objects.all().order_by('id')
        serializer = TableSerializer(queryset, many=True)

        final = {"mentors":serializer.data}

        return Response(final)

