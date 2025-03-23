from django import forms
from course_app.models import Course

class AddTraineeForm(forms.Form):
    name = forms.CharField(max_length=100)
    age = forms.IntegerField()
    email = forms.EmailField()
    course = forms.ChoiceField(choices=[])

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        try:
            self.fields['course'].choices = [(course.id, course.name) 
                                           for course in Course.objects.all()]
        except:
            self.fields['course'].choices = []