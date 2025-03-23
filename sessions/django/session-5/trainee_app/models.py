from django.db import models
from course_app.models import Course

# Create your models here.
class Trainee(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()
    course = models.ForeignKey(
        Course, 
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )