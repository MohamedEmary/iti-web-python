from django.shortcuts import render, redirect, get_object_or_404
from .models import Trainee
from course_app.models import Course
from .forms import  AddTraineeForm
from django.views import View
from django.views.generic import ListView
from django.views.generic.edit import DeleteView
from django.urls import reverse_lazy
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import TraineeSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework import viewsets

courses = Course.objects.all()
class TraineeListView(ListView):
    model = Trainee
    template_name = 'trainee/trainee_list.html'
    context_object_name = 'trainees'

class TraineeDeleteView(DeleteView):
    model = Trainee
    template_name = 'trainee/trainee_confirm_delete.html'
    success_url = reverse_lazy('trainee_list')
    
    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)

class AddTraineeView(View):
    template_name = 'trainee/add_trainee.html'
    
    def get(self, request):
        form = AddTraineeForm()
        return render(request, 'trainee/add_trainee.html', {'form': form, 'courses': courses})
    
    def post(self, request):
        form = AddTraineeForm(request.POST)
        if form.is_valid():
            Trainee.objects.create(
                name=form.cleaned_data['name'],
                age=form.cleaned_data['age'],
                email=form.cleaned_data['email'],
                course=Course.objects.get(id=form.cleaned_data['course'])
            )
            return redirect('trainee_list')
        return render(request, 'trainee/add_trainee.html', {'form': form, 'courses': courses})

class UpdateTraineeView(View):
    template_name = 'trainee/update_trainee.html'
    
    def get(self, request, id):
        trainee = get_object_or_404(Trainee, id=id)
        courses = Course.objects.all()
        context = {'courses': courses, 'trainee': trainee}
        return render(request, self.template_name, context)
    
    def post(self, request, id):
        trainee = get_object_or_404(Trainee, id=id)
        trainee.name = request.POST['name']
        trainee.age = request.POST['age']
        trainee.email = request.POST['email']
        trainee.course = Course.objects.get(id=request.POST['course'])
        trainee.save()
        return redirect('trainee_list')

class TraineeListCreateAPIView(APIView):
    def get(self, request):
        trainees = Trainee.objects.all()
        serializer = TraineeSerializer(trainees, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TraineeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TraineeUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trainee.objects.all()
    serializer_class = TraineeSerializer

@api_view(['PUT'])
def track_update(request, pk):
    try:
        trainee = Trainee.objects.get(pk=pk)
    except Trainee.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = TraineeSerializer(trainee, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TraineeViewSet(viewsets.ModelViewSet):
    queryset = Trainee.objects.all()
    serializer_class = TraineeSerializer

