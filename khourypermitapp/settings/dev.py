from .common import *

# Override common.py here for development

DEBUG = True

INTERNAL_IPS = [
    "127.0.0.1",
]

# Development Apps
DEV_APPS = [
    "debug_toolbar",
]

INSTALLED_APPS = [*INSTALLED_APPS, *DEV_APPS]


# Development Middleware
DEV_MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]

MIDDLEWARE = [*MIDDLEWARE, *DEV_MIDDLEWARE]


# Configuration for media files
MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"


# SMTP4DEV Configuration
EMAIL_HOST = "localhost"
EMAIL_HOST_USER = ""
EMAIL_HOST_PASSWORD = ""
EMAIL_PORT = 2525


# Outside Configuration
ALLOWED_HOSTS = ["*"]

CORS_ALLOW_ALL_ORIGINS = True


# Dev Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}