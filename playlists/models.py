from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.conf import settings
from django.core.validators import RegexValidator

regex = r'^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$'


class EmbeddedSound(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='embedded_sounds')
    url = models.URLField(validators=[RegexValidator(regex=regex)])


class Playlist(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='playlists')
    name = models.CharField(max_length=100)
    sounds = ArrayField(ArrayField(models.CharField(max_length=250)))
