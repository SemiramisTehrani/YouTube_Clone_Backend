from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Replies
from .serializers import RepliesSerializer


# Create your views here.
@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def get_replies(request, pk):
    if request.method == "GET":
        replies = Replies.objects.filter(comment_id = pk)
        serializer = RepliesSerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = RepliesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, comment_id = pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
