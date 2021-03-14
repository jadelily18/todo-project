from django.shortcuts import render
from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer


class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDelete(generics.DestroyAPIView):
    serializer_class = TodoSerializer

    def get_queryset(self):
        queryset = Todo.objects.filter(pk=self.kwargs['pk'])
        return queryset

    def perform_destroy(self, instance):
        return instance.delete()

