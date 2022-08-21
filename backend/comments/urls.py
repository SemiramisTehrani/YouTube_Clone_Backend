from django.urls import path
from comments import views

urlpatterns = [
    path('all/', views.get_all_comments),
    path('', views.user_comments),


    path('<str:id>/', views.get_all_comments_id),
    path('', views.update_comment),
    path('<int:pk>/update/', views.update_comment),
    # path('like_status/<str:id>/', views.likes),

    path('<int:id>/', views.likes)
    
]