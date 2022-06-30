from rest_framework import serializers

from .models import Mentor
from school.serializers import HighSchoolSerializer, UniSerializer

class SimpleMentorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Mentors
        fields = ('id','first_name', 'last_name', 'major','grad_year','email', 'linkedin','intro', 'essay_editing')

class MentorSerializer(serializers.HyperlinkedModelSerializer):
    high_school = HighSchoolSerializer(required = False)
    uni = UniSerializer(required = False)

    class Meta:
        model = Mentor
        fields = ('id','first_name', 'last_name', 'major','grad_year','email', 'linkedin','high_school', 'uni','intro','preferred_mentee_grade','other_preferences',"essay_editing")

class TableSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Mentor
        fields = ('first_name', 'last_name', 'major','grad_year','email', 'linkedin')
