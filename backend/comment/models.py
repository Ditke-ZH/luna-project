from django.contrib.auth import get_user_model
from django.db import models
from review.models import Review

User = get_user_model()


# Create your models here.
class Comment(models.Model):
    review_comment = models.ManyToManyField(to=Review, related_name='comments', blank=True)
    user = models.ManyToManyField(to=User, related_name='comments', blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    comments_likes = models.IntegerField(blank=True, null=True)
    comments_text = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return f'{self.user} : {self.review_comment}, {self.date_created}'
