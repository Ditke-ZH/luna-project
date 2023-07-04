from django.contrib.auth import get_user_model
from django.db import models
from review.models import Review

User = get_user_model()


class Comment(models.Model):
    review = models.ForeignKey(to=Review, related_name='comments', on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(to=User, related_name='comments', on_delete=models.CASCADE, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    comments_likes = models.IntegerField(blank=True, null=True)
    comments_text = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return f'{self.user} : {self.review}, {self.date_created}'
