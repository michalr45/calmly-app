import json
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import *
from .api.serializers import *
from django.contrib.auth import get_user_model

User = get_user_model()


class RegistrationTestCase(APITestCase):

    def test_registration(self):
        data = {'username': 'test',
                'email': 'test@localhost.com',
                'password1': 'testpassword123',
                'password2': 'testpassword123'}
        response = self.client.post('/accounts/register/', data)
        self.assertEqual(response.status_code, status.HTTP_302_FOUND)


class EmbeddedSoundTestCase(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='test_1',
                                             password='testpassword123')

    def test_embedded_sounds_list_authenticated(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get('/api/embedded_sounds/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_embedded_sounds_list_unauthenticated(self):
        self.client.force_authenticate(user=None)
        response = self.client.get('/api/embedded_sounds/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_embedded_sound_authenticated(self):
        self.client.force_authenticate(user=self.user)
        data = {'url': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
        response = self.client.post('/api/embedded_sounds/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_embedded_sound_unauthenticated(self):
        self.client.force_authenticate(user=None)
        data = {'url': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
        response = self.client.post('/api/embedded_sounds/', data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_embedded_sound_wrong_url(self):
        self.client.force_authenticate(user=self.user)
        data = {'url': 'https://www.youtube.com/'}
        response = self.client.post('/api/embedded_sounds/', data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

