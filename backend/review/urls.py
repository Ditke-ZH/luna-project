from django.urls import path

from review.views import ListCreateReviewsView, ListRestaurantReviews, RetrieveUpdateDeleteReviewsView, \
    ToggleLikeReview, ListReviewsView, ListLikedReviews, ListCommentedReviews


urlpatterns = [
    path('', ListCreateReviewsView.as_view()),
    path('new/<int:restaurant_id>/', ListCreateReviewsView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviews.as_view()),
    path('user/<int:user_id>/', ListReviewsView.as_view()),
    path('user/me/', ListReviewsView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteReviewsView.as_view()),
    path('like/<int:pk>/', ToggleLikeReview.as_view()),
    path('likes/', ListLikedReviews.as_view()),
    path('comments/', ListCommentedReviews.as_view())
]
