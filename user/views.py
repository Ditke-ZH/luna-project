from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework import generics
from rest_framework.response import Response

from user.serializers import UserSerializer

# Create your views here.
User = get_user_model()


class RetrieveUpdateDeleteUserGenericAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    lookup_field = None

    def get_object(self):
        return self.request.user

    def patch(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class RetrieveUsersList(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.all()


class FilteringUsersList(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        first_name = self.request.query_params.get('first_name')
        last_name = self.request.query_params.get('last_name')
        if first_name or last_name:
            filter_kwargs = {}
            if first_name:
                filter_kwargs['first_name__icontains'] = first_name
            if last_name:
                filter_kwargs['last_name__icontains'] = last_name
            queryset = queryset.filter(**filter_kwargs)
        return queryset
