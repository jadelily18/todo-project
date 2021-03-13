from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=120)
    details = models.TextField(max_length=480)
    completed = models.BooleanField()

