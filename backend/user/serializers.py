from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializerFollow(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class UserSerializer(serializers.ModelSerializer):
    user_follows = UserSerializerFollow(read_only=True, many=True)

    class Meta:
        model = User
        fields = '__all__'
