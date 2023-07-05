from rest_framework.generics import RetrieveAPIView, DestroyAPIView, CreateAPIView
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers import CommentSerializer
from email_scheduler.models import EmailScheduler
from project.permissions import IsOwnerAdminOrReadOnly
from review.models import Review


class CreateCommentView(CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def post(self, request, *args, **kwargs):
        review_id = self.kwargs.get('review_id')
        review = Review.objects.get(pk=review_id)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, review=review)

        # create email to review-author
        mail_instance = EmailScheduler.objects.all()
        subject = 'Luna-3: your review got commented'
        message = f'Dear {review.user.username}\n\n' \
                  f'Your review on {review.restaurant.name} just got a new comment.\n' \
                  f'{request.user.username} said:\n\n' \
                  f'{request.data.text}\n\n' \
                  f'So go on, and review other restaurants!\n\n' \
                  f'See you soon on luna3!'
        mail_instance.create(subject=subject, message=message, recipient_list=review.user.email)

        return Response(serializer.data)


class GetUserCommentsView(RetrieveAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all().order_by('-date_created')
    lookup_field = 'user_id'


class DeleteCommentView(DestroyAPIView):
    permission_classes = [IsOwnerAdminOrReadOnly, ]
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
