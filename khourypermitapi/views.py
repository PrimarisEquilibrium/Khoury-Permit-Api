from django.http import HttpResponse

def index(request):
    return HttpResponse("Khoury Design and Permit Drawings API")