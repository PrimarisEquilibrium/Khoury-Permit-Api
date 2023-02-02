from rest_framework import serializers

from .models import Project, ProjectItem, Category


class ProjectItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectItem
        fields = ["id", "description", "image"]


class ProjectSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ["id", "location", "category", "image", "items"]

    def get_items(self, obj):
        return [ProjectItemSerializer(s).data for s in obj.projectitem_set.all()]
    

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "category"]


class EmailSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.CharField(max_length=255)
    message = serializers.CharField(max_length=1000)