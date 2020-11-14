from django.urls import path
from django.views.generic.base import TemplateView
from .import views

app_name = 'app'

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('hello_webpack/', TemplateView.as_view(template_name='hello_webpack.html'), name='hello')
]