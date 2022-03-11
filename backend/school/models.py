from django.db import models
from django.forms import CharField

# Create your models here.

class High_school(models.Model):
    name = models.CharField(max_length=100)
    lat = models.IntegerField(blank = True, null = True)
    long = models.IntegerField(blank = True, null = True)
    city = models.CharField(max_length=100,blank = True, null = True )
    country = models.CharField(max_length=100,blank = True, null = True)

    def __str__(self):
        return self.name

class Uni(models.Model):
    name = models.CharField(max_length=100)
    lat = models.IntegerField(blank = True, null = True)
    long = models.IntegerField(blank = True, null = True)
    city = models.CharField(max_length=100,blank = True, null = True)
    country = models.CharField(max_length=100,blank = True, null = True)

    def __str__(self):
        return self.name