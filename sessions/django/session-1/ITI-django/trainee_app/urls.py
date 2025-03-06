from django.urls import path
from . import views

urlpatterns = [
    path('traineelist/', views.trainee_list, name='trainee_list'),
    path('add_trainee/', views.add_trainee, name='add_trainee'),
    path('update_trainee/<int:id>/', views.update_trainee, name='update_trainee'),
    path('delete_trainee/<int:id>/', views.delete_trainee, name='delete_trainee'),
]

