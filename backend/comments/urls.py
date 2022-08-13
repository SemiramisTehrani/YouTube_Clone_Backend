from django.urls import path
from comments import views


urlpatterns = [
    path('<str:id>/', views.get_all_comments),
    path('', views.new_comment),
    path('<int:pk>/like/', views.likes)
]