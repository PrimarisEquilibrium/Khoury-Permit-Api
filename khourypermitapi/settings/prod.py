from .common import *
import dj_database_url

# Override common.py here for production

DEBUG = False

ALLOWED_HOSTS = [
    "khourypermit-api.herokuapp.com",
]

CSRF_TRUSTED_ORIGINS = [
    "https://khourypermit-api.herokuapp.com"
]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = ['*']

CORS_ALLOWED_ORIGINS = [
    "https://khourybuildingpermits.com",
    "http://localhost:3000"
]

# Production Apps
PROD_APPS = [
    "storages",
]

INSTALLED_APPS = [*INSTALLED_APPS, *PROD_APPS]

# AWS S3 Bucket Setup (media files)
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = "khourypermitwebsite"
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


# MySQL Database | JawsDB MySQL Provision
DATABASES = {
    'default': dj_database_url.config()
}


# Removes Browsable API View
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}


# Mailgun SMTP Server
EMAIL_HOST = os.environ.get("MAILGUN_SMTP_SERVER")
EMAIL_HOST_USER = os.environ.get("MAILGUN_SMTP_LOGIN")
EMAIL_HOST_PASSWORD = os.environ.get("MAILGUN_SMTP_PASSWORD")
EMAIL_PORT = os.environ.get("MAILGUN_SMTP_PORT")