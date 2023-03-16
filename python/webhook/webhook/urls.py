from receiver.views import webhook
from django.urls import path

urlpatterns = [
    path('webhook', webhook)
]