# Generated by Django 4.2.2 on 2023-07-03 16:07

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('review', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('comments_likes', models.IntegerField(blank=True, null=True)),
                ('comments_text', models.CharField(blank=True, max_length=300, null=True)),
                ('review_comment', models.ManyToManyField(blank=True, related_name='comments', to='review.review')),
                ('user', models.ManyToManyField(blank=True, related_name='comments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
