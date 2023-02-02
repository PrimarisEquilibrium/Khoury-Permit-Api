from django.urls import path

from .views import ProjectView, CategoryView, EmailView, RecaptchaView


urlpatterns = [
    path("project/", ProjectView.as_view()),
    path("category/", CategoryView.as_view()),
    path("email/", EmailView.as_view()),
    path("recaptcha/", RecaptchaView.as_view())
]