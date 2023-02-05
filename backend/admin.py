from django.contrib import admin
from django.utils.html import format_html, urlencode
from django.urls import reverse

from .models import Project, ProjectItem, Category


admin.site.site_header = "Khoury Design And Permit Drawings Admin Panel"


class ProjectItemInline(admin.TabularInline):
    model = ProjectItem


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["admin_photo", "location", "category", "project_priority"]
    list_editable = ["project_priority"]
    search_fields = ["location"]
    list_filter = ["category"]
    inlines = [ProjectItemInline]


@admin.register(Category)
class Category(admin.ModelAdmin):
    search_fields = ["category"]
    list_display = ["category", "project_count"]

    def project_count(self, obj):
        url = (
            reverse('admin:backend_project_changelist')
            + '?'
            + urlencode({
                'project__id': str(obj.id)
            }))
        count = ProjectItem.objects.filter(project_id=obj.id).count()
        return format_html('<a href="{}">{}</a>', url, count)