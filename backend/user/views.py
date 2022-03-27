from xml.dom import ValidationErr
from django.conf import settings

# Create your views here.

from rest_framework import viewsets, serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .serializers import UsersSerializer
from .models import Users

# from api.mixins import ApiErrorsMixin, PublicApiMixin
from google.oauth2 import id_token
from google.auth.transport import requests
# from .jwt import jwt_login

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by('id')
    serializer_class = UsersSerializer

class UserLoginAPI(APIView):
    permission_classes = [AllowAny,]

    def post(self, request, *args, **kwargs):
        token = request.headers.get('Authorization')

        # (Receive token by HTTPS POST)
        try:
            # Specify the CLIENT_ID of the app that accesses the backend:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.GOOGLE_OAUTH2_CLIENT_ID)

            # ID token is valid. Get the user's Google Account ID from the decoded token.
            userid = idinfo['sub']
        except ValueError:
            # Invalid token
            raise ValidationErr("Invalid Token")
        
        serializer = self.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # user,_ = user_get(**serializer.validated_data)

        # response = Response(data=user_get_me(user=user))
        # response = jwt_login(response=response, user=user)

        return Response(data=serializer.data)