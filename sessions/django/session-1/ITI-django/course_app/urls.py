from django.urls import path
from . import views

urlpatterns = [
    path('courselist/', views.course_list, name='course_list'),
    path('add_course/', views.add_course, name='add_course'),
    path('update_course/<int:id>/', views.update_course, name='update_course'),
    path('delete_course/<int:id>/', views.delete_course, name='delete_course'),
]
