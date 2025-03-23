from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TraineeListCreateAPIView, TraineeUpdateDeleteAPIView, track_update, TraineeViewSet

router = DefaultRouter()
router.register(r'trainees', TraineeViewSet)

urlpatterns = [
    path('', TraineeListCreateAPIView.as_view(), name='trainee_list'),  # Add this line
    path('trainees/', TraineeListCreateAPIView.as_view(), name='trainee-list-create'),
    path('trainees/<int:pk>/', TraineeUpdateDeleteAPIView.as_view(), name='trainee-update-delete'),
    path('track_update/<int:pk>/', track_update, name='track-update'),
    path('api/', include(router.urls)),
]