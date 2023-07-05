from django.contrib.auth import get_user_model
from django.db.models import Q
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import generics
from rest_framework.response import Response

from user.serializers import UserSerializer

User = get_user_model()


class RetrieveUpdateDeleteUserView(RetrieveUpdateDestroyAPIView):
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

    @swagger_auto_schema(auto_schema=None)
    def put(self, request, *args, **kwargs):
        pass


class RetrieveUsersList(ListAPIView):
    """
        get:
        List all Users
        searchable on username, first_name and last_name with query-parameter 'search'
        EXAMPLE ".../api/users/?search=stefan"
    """
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        search_string = self.request.query_params.get('search', None)
        if search_string is not None:
            queryset = queryset.filter(Q(username__icontains=search_string) |
                                       Q(first_name__icontains=search_string) |
                                       Q(last_name__icontains=search_string))
        return queryset


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


class RetrieveUserByIDView(RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_url_kwarg = 'user_id'
