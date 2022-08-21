from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes','user_id']
        # fields = ['id', 'video_id', 'text', 'likes', 'dislikes','user_id'] if I want to get rid of user info, use this line
        depth = 1