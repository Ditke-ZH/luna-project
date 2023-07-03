from django.db import models
from restaurant.models import Restaurant

# Create your models here.
CATEGORY_CHOICES = [
    (1, "American"),
    (2, "British"),
    (3, "Chinese"),
    (4, "Egyptian"),
    (5, "French"),
    (6, "German"),
    (7, "Greek"),
    (8, "Hungarian"),
    (9, "Indian"),
    (10, "Italian"),
    (11, "Japanese"),
    (12, "Mexican"),
    (13, "Spanish"),
    (14, "Swiss"),
    (15, "Turkish")
]


class Category(models.Model):
    name = models.IntegerField(choices=CATEGORY_CHOICES, default=1)
    restaurants = models.ManyToManyField(to=Restaurant, related_name='categories', blank=True, null=True)

    def __str__(self):
        return self.name
