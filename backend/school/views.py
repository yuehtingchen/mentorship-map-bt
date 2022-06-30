from argparse import Action
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import action


# Create your views here.

from rest_framework import viewsets

from .serializers import UniSerializer
from mentor.serializers import SimpleMentorSerializer
from .models import Uni
from mentor.models import Mentor
from rest_framework.response import Response


class UniViewSet(viewsets.ModelViewSet):
    
    queryset = Uni.objects.all().order_by('id')
    serializer_class = UniSerializer

    def retrieve(self, request, pk = None):
        qset = Uni.objects.all()
            
        instance = get_object_or_404(qset, pk = pk)

        rel_course = Mentor.objects.filter(uni = instance)
        rel_serializer = SimpleMentorSerializer(rel_course, many = True)

        serializer = self.get_serializer(instance)

        final = {}

        final.update(serializer.data)
        final.update({"mentors": rel_serializer.data})

        return Response(final)

