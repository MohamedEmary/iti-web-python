from django.urls import path
from . import views

urlpatterns = [
    path('courselist/', views.CourseListView.as_view(), name='course_list'),
    path('add_course/', views.CourseAddView.as_view(), name='add_course'),
    path('update_course/<int:id>/', views.CourseUpdateView.as_view(), name='update_course'),
    path('delete_course/<int:pk>/', views.DeleteTraineeView.as_view(), name='delete_course'),
]
