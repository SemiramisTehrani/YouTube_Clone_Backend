from django.urls import path, include
from replies import views

urlpatterns = [
    path('', views.get_replies)
]