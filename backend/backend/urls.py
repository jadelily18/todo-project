from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework import routers
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'todo-all', views.TodoCRUD)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/todo-all/', views.TodoCRUD.as_view())
]
