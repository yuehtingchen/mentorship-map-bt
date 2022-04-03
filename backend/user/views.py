from ast import Raise
from multiprocessing import AuthenticationError
from xml.dom import ValidationErr
from xmlrpc.client import ResponseError
from django.conf import settings
from django.contrib.auth import login
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.

from rest_framework import viewsets, exceptions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .serializers import UsersSerializer
from .models import Users

from google.oauth2 import id_token
from google.auth.transport import requests

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('id')
    serializer_class = UsersSerializer

class UserLoginAPI(APIView):
    permission_classes = [AllowAny,]

    def post(self, request, *args, **kwargs):
        token = request.headers.get('Authorization')

        try:
            # Specify the CLIENT_ID of the app that accesses the backend:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.GOOGLE_OAUTH2_CLIENT_ID)
            # ID token is valid. Get the user's Google Account ID from the decoded token.
            user_email = idinfo['email']
            
        except ValueError:
            # Invalid token
            raise exceptions.AuthenticationFailed("Invalid Token")
        
        serializer = UsersSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            user = Users.objects.get(email=user_email)
        except ObjectDoesNotExist:
            raise exceptions.AuthenticationFailed("User does not exist")

        login(request, user)
        return Response(data=user)