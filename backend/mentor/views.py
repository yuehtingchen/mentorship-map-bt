from argparse import Action
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import action


# Create your views here.

from rest_framework import viewsets

from .serializers import MentorSerializer, TableSerializer
from .models import Mentor
from rest_framework.response import Response



class MentorsViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all().order_by('id')
    serializer_class = MentorSerializer

class TableViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all().order_by('id')
    serializer_class = TableSerializer

    def list(self, request):
        queryset = Mentor.objects.all().order_by('id')
        serializer = TableSerializer(queryset, many=True)

        final = {"mentors":serializer.data}

        return Response(final)

