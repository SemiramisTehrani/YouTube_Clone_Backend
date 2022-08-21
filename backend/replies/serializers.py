from rest_framework import serializers

from .models import Replies

class RepliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ["id", "user", "comment", "text", "user_id", "comment_id"]
        depth = 1