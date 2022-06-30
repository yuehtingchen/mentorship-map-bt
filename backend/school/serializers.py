from rest_framework import serializers

from .models import HighSchool, Uni

class HighSchoolSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HighSchool
        fields = ('id','name','lat','long','city','country')

class UniSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Uni
        fields = ('id','name','lat','long','city','country')

