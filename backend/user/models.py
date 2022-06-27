from django.db.models.fields import CharField, EmailField
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from rest_framework import viewsets, exceptions
from google.oauth2 import id_token
from google.auth.transport import requests

# Create your models here.
class Users(AbstractBaseUser):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    email = EmailField(max_length=100, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def authenticate(self, request, token=None):
        try:
            # Specify the CLIENT_ID of the app that accesses the backend:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.GOOGLE_OAUTH2_CLIENT_ID)
            # ID token is valid. Get the user's Google Account ID from the decoded token.
            user_email = idinfo['email']
        except ValueError:
            # Invalid token
            raise exceptions.AuthenticationFailed("Invalid Token")
        user = self.get_user(self, user_email)
        return user

    def get_user(self, email):
        try:
            return Users.objects.get(email=email)
        except Users.DoesNotExist:
            raise exceptions.AuthenticationFailed("User does not exist")

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_unusable_password()
        user.save(using=self._db)
        return user