from django.urls import path
from . import views

app_name = 'uploadChar'

urlpatterns = [
    path('home/', views.homePage, name='home'),
    path('characters/', views.charPage, name='characters'),
    path('edit/<int:id>/', views.editPage, name='edit'),
    path('delete/<int:id>', views.deletePage, name='delete'),
]




