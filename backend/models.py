from django.db import models
from django.utils.safestring import mark_safe


class Category(models.Model):
    category = models.CharField(max_length=255)

    def __str__(self) -> str:
        return str(self.category)


class Project(models.Model):
    location = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    project_priority = models.IntegerField(null=True, default=0)
    image = models.ImageField(upload_to="project/")

    def admin_photo(self):
        return mark_safe(f"<img src='{self.image.url}' height='75' />")

    class Meta:
        ordering = ("-project_priority", )

    def __str__(self) -> str:
        return str(self.location)


class ProjectItem(models.Model):
    description = models.CharField(max_length=255)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="project-items/")

    def admin_photo(self):
        return mark_safe(f"<img src='{self.image.url}' height='75' />")

    def __str__(self) -> str:
        return str(self.description)