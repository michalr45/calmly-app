from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from ..models import EmbeddedSound, Playlist
from .serializers import EmbeddedSoundSerializer, PlaylistSerializer


class UserID(APIView):

    def get(self, request):
        user_id = request.user.id
        return Response(user_id)


class EmbeddedSoundViewSet(viewsets.ModelViewSet):

    serializer_class = EmbeddedSoundSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = EmbeddedSound.objects.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PlaylistViewSet(viewsets.ModelViewSet):

    serializer_class = PlaylistSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Playlist.objects.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)