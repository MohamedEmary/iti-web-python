from django import forms
from .models import Trainee

class TraineeForm(forms.ModelForm):
    class Meta:
        model = Trainee
        fields = ['first_name', 'last_name', 'email', 'phone', 'course']
