from django.db import models
from django.db.models.fields import CharField, IntegerField, EmailField, URLField, TextField, BooleanField
from school.models import HighSchool, Uni
# Create your models here.

class Mentor(models.Model):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    major = CharField(max_length=100)
    grad_year = IntegerField()
    email = EmailField(unique=True)
    linkedin = URLField(unique=True, blank=True)

    uni = models.ForeignKey(Uni , blank = False, null = False, on_delete = models.PROTECT)
    intro = TextField(blank = False, null = True)

    YEAR_CHOICES = [("FR","高一"),("S0","高二"),("SR","高三")]
    preferred_mentee_grade = CharField(max_length = 100, null = True, blank = True,choices=YEAR_CHOICES)
    other_preferences = TextField(blank = True, null = True)

    essay_editing = BooleanField(default = True)

    def __str__(self):
        return self.first_name + " " + self.last_name