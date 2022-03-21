from rest_framework import serializers

from .models import Users

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('id','first_name', 'last_name', 'email')
