from rest_framework import serializers
from ..models import EmbeddedSound, Playlist
from django.core.validators import RegexValidator


class EmbeddedSoundSerializer(serializers.ModelSerializer):
    regex = r'^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$'

    url = serializers.URLField(validators=[RegexValidator(regex=regex)])

    class Meta:
        model = EmbeddedSound
        exclude = ['user']


class PlaylistSerializer(serializers.ModelSerializer):

    sounds = serializers.ListField(child=serializers.ListField())

    class Meta:
        model = Playlist
        exclude = ['user']
