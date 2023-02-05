from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("backend.urls")),

    path('', TemplateView.as_view(template_name="index.html")),
    path('contact/', TemplateView.as_view(template_name="index.html")),
    
    path('__debug__/', include('debug_toolbar.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)