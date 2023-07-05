from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # Field for login
    USERNAME_FIELD = 'email'

    # Additional fields for createsuperuser
    REQUIRED_FIELDS = ['username']
    first_name = models.CharField(max_length=100, blank=True, default='')
    last_name = models.CharField(max_length=120, blank=True, default='')
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=120, blank=True, default='')
    user_phone = models.CharField(max_length=12, blank=True, default='')
    user_description = models.CharField(max_length=320, blank=True, default='')
    date_joined = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(blank=True, null=True)

    def __str__(self):
        return f'{self.id} : {self.first_name},{self.last_name}, {self.email}'
