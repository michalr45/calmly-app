from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

embedded_router = DefaultRouter()
embedded_router.register(r'embedded_sounds', views.EmbeddedSoundViewSet, basename='embedded_sounds')

playlists_router = DefaultRouter()
playlists_router.register(r'playlists', views.PlaylistViewSet, basename='playlists')

urlpatterns = [
    path('', include(embedded_router.urls)),
    path('playlists/', include(playlists_router.urls)),
    path('user_id/', views.UserID.as_view(), name='user-id'),
]
