from django.urls import path

from user.views import RetrieveUpdateDeleteUserGenericAPIView, RetrieveUsersList, FilteringUsersList, \
    RetrieveUserByIDGenericAPIView

urlpatterns = [
    path('me/', RetrieveUpdateDeleteUserGenericAPIView.as_view()),
    path('list/', RetrieveUsersList.as_view()),
    path('search/', FilteringUsersList.as_view()),
    path('<int:pk>/', RetrieveUserByIDGenericAPIView.as_view()),
    ]
