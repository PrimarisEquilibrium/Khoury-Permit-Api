from .common import *
import dj_database_url

# Override common.py here for production

DEBUG = False

ALLOWED_HOSTS = ["khourypermitapi.herokuapp.com"]

CORS_ALLOWED_ORIGINS = [
    "khourybuildingpermits.com"
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


# MySQL Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'khourypermitwebsite',
        'HOST': 'khourypermitapi.herokuapp.com',
        'PORT': '3306',
        'USER': os.environ.get("DB_USER"),
        'PASSWORD': os.environ.get("DB_PASSWORD"),
    }
}