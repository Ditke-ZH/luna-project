from rest_framework.generics import RetrieveAPIView, DestroyAPIView, CreateAPIView
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers import CommentSerializer
from review.models import Review


class CreateCommentView(CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def post(self, request, *args, **kwargs):
        review_id = self.kwargs.get('review_id')
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, review=Review.objects.get(pk=review_id))
        return Response(serializer.data)


class GetUserCommentsView(RetrieveAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all().order_by('-date_created')
    lookup_field = 'user_id'


class DeleteCommentView(DestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
