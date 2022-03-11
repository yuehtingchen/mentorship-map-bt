from django.db import models
from django.db.models.fields import CharField, EmailField

# Create your models here.
class Users(models.Model):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    email = EmailField(max_length=100, unique=True)

    def __str__(self):
        return self.first_name + " " + self.last_name
