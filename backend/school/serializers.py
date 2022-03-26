from curses.ascii import US
from rest_framework import serializers

from .models import High_school, Uni

class HighSchoolSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = High_school
        fields = ('id','name','lat','long','city','country')

class UniSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Uni
        fields = ('id','name','lat','long','city','country')

