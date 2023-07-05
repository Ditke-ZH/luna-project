from django.contrib.auth import get_user_model
from drf_yasg.utils import swagger_auto_schema
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from email_scheduler.models import EmailScheduler
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer

User = get_user_model()


class RestaurantListView(ListAPIView):
    """
        get:
        List all the Restaurants in order of their rating
    """
    serializer_class = RestaurantSerializer

    def get_queryset(self):

        if self.request._request.path == '/api/home/':
            queryset = Restaurant.objects.all().order_by('-rating_average')[:4]
        else:
            queryset = Restaurant.objects.all().order_by('-rating_average')
        return queryset


class RestaurantUserListView(ListAPIView):
    """
        get:
        List all the Restaurants of a specific user in order of their rating
    """
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(owner_id=user_id).order_by('-rating_average')


class RestaurantCategoryListView(ListAPIView):
    """
        get:
        List all the Restaurants of a specific category in order of their rating
    """
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Restaurant.objects.filter(categories__contains=category_id).order_by('-rating_average')


class RestaurantCreateView(CreateAPIView):
    """
        post:
        create a new restaurant
    """
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

        # create email to user for confirmation
        mail_instance = EmailScheduler.objects.all()
        subject = 'Motion-3: new restaurant created'
        message = f'Dear {self.request.user.username}\n\n' \
                  f'You get this email to confirm, that you have just created a new restaurant:\n\n' \
                  f'{serializer.data["name"]} in {serializer.data["city"]}, {serializer.data["country"]}\n\n' \
                  f'See you soon on luna3!'
        mail_instance.create(subject=subject, message=message, recipient_list=self.request.user.email)


class RestaurantGetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    """
        get:
        Get the details of a restaurant by providing the id of the restaurant

        patch:
        Update a restaurant by id (allowed only for owner or admin)

        delete:
        Delete a restaurant by id (allowed only for owner or admin)
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'id'

    @swagger_auto_schema(auto_schema=None)
    def put(self, request, *args, **kwargs):
        pass
