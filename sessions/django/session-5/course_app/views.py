from django.shortcuts import render, redirect, get_object_or_404
from .models import Course
from django.views.generic import ListView, DeleteView
from django.urls import reverse_lazy
from django.views import View

class CourseListView(ListView):
    model = Course
    template_name = 'course/course_list.html'
    context_object_name = 'courses'

class DeleteTraineeView(DeleteView):
    model = Course
    template_name = 'course/course_confirm_delete.html'
    success_url = reverse_lazy('course_list')

    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)  # Deletes immediately
    
class CourseAddView(View):
    def get(self, request):
        return render(request, 'course/add_course.html')

    def post(self, request):
        name = request.POST['name']
        description = request.POST['description']
        Course.objects.create(name=name, description=description)
        return redirect('course_list')

class CourseUpdateView(View):
    def get(self, request, id):
        course = get_object_or_404(Course, id=id)
        return render(request, 'course/update_course.html', {'course': course})

    def post(self, request, id):
        course = get_object_or_404(Course, id=id)
        course.name = request.POST['name']
        course.description = request.POST['description']
        course.save()
        return redirect('course_list')
