
from django.db import models

class FoodItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    # Add more fields as needed