<template>
  <button id="save" @click="showForm">Save combination as a playlist</button>
    <div class="add-playlist-form">
      <form @submit.prevent="createPlaylist">
        <input type="text" v-model="playlistName" placeholder="name">
        <input type="submit" value="Add" id="add-button">
      </form>
    </div>
  <p v-if="error">{{ error }}</p>
  <p v-if="created">{{ created }}</p>
  <div class="home">
    <div class="container">
      <div class="icon-box">
          <img src="/static/dist/images/campfire.png" id="image-1" @click="playAudio($event)">
          <audio id="campfire-sound" loop>
            <source src="/static/dist/sounds/Fire.mp3">
          </audio>
          <input type="range" min="0" max="100" step="1" id="volume-1" @change="setVolume($event, $event.target.value)">
      </div>
      <div class="icon-box">
        <img src="/static/dist/images/rain.png" id="image-2" @click="playAudio($event)">
        <audio id="rain-sound" loop>
            <source src="/static/dist/sounds/Rain.mp3">
        </audio>
        <input type="range" min="0" max="100" step="1" id="volume-2" @change="setVolume($event, $event.target.value)">
      </div>
      <div class="icon-box">
        <img src="/static/dist/images/birds.png" id="image-3" @click="playAudio($event)">
          <audio id="birds-sound" loop>
            <source src="/static/dist/sounds/birds-singing.mp3">
          </audio>
        <input type="range" min="0" max="100" step="1" id="volume-3" @change="setVolume($event, $event.target.value)">
      </div>
      <div class="icon-box">
        <img src="/static/dist/images/river.png" id="image-4" @click="playAudio($event)">
          <audio id="river-sound" loop>
            <source src="/static/dist/sounds/river-stream.mp3">
          </audio>
        <input type="range" min="0" max="100" step="1" id="volume-4" @change="setVolume($event, $event.target.value)">
      </div>
      <div class="icon-box">
        <img src="/static/dist/images/thunder.png" id="image-5" @click="playAudio($event)">
          <audio id="thunder-sound" loop>
            <source src="/static/dist/sounds/thunder.mp3">
          </audio>
        <input type="range" min="0" max="100" step="1" id="volume-5" @change="setVolume($event, $event.target.value)">
      </div>
      <div class="icon-box">
        <img src="/static/dist/images/keyboard.png" id="image-6" @click="playAudio($event)">
          <audio id="keyboard-sound" loop>
            <source src="/static/dist/sounds/Keyboard-Typing.mp3">
          </audio>
          <input type="range" min="0" max="100" step="1" id="volume-6" @change="setVolume($event, $event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>

import {axios} from "@/common/api.service";

export default {
  name: 'Home',
  data() {
    return {
      playlistName: null,
      playlistSounds: [],
      error: null,
      created: null,
    }
  },
  methods: {
    playAudio(element) {
      let audio = element.target.nextSibling;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    setVolume(element, value) {
      let audio = element.target.previousSibling;
      audio.volume = value / 100;
    },
    async createPlaylist(){
      if (!this.playlistName){
        this.error = 'Name your playlist';
        return;
      }
      const sounds = document.querySelectorAll('audio');
      for (let sound of sounds) {
        if (!sound.paused) {
          this.playlistSounds.push([sound.previousSibling.src, sound.firstChild.src, sound.volume]);
        }
      }
      if (this.playlistSounds.length === 0){
        this.error = 'Playlist must contain at least one sound';
        return;
      }
      const endpoint = '/api/playlists/playlists/';
      try {
        await axios.post(endpoint, { name: this.playlistName, sounds: this.playlistSounds})
        this.error = null;
        this.created = 'Playlist created';
      } catch (error) {
        console.log(error);
      }
      this.playlistName = null;
      this.playlistSounds = [];
    },
    showForm(){
      const form = document.querySelector('.add-playlist-form');
      const btn = document.querySelector('#save');
      if (form.style.display !== 'flex') {
        form.style.display = 'flex';
        btn.innerHTML = 'Cancel';
      } else {
        form.style.display = 'none';
         btn.innerHTML = 'Save combination as a playlist';
         this.error = null;
         this.created = null;
      }
    }
  }
}
</script>

<style>

.home{
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#save{
  height: 25px;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  padding-right: 15px;
  padding-left: 15px;


  margin-top: 20px;
  margin-bottom: 15px;
}

.add-playlist-form{
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: none;
}

.add-playlist-form input[type="text"]{
  margin-right: 10px;
  margin-bottom: 10px;
  height: 20px;
  width: 180px;
  border: 1px solid black;
  border-radius: 6px;
}

.add-playlist-form input[type="submit"]{
  height: 25px;
  width: 60px;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}


.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;

}

.icon-box{
  margin-top: 60px;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img{
  height: 25%;
  width: 25%;
  cursor: pointer;
}


/* input range styling (mostly from https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/)*/

/*Range Reset*/
input[type="range"] {
    display: block;
    margin-top: 30px;

   -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 11rem;
}

/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/***** Chrome, Safari, Opera and Edge Chromium styles *****/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
  background-color: white;
  border-radius: 0.5rem;
  height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
  border: 1px solid #00001E;
  height: 20px;
  width: 20px;
  border-radius: 15px;
  background: darkgrey;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}

/******** Firefox styles ********/
/* slider track */
input[type="range"]::-moz-range-track {
   background-color: white;
   border-radius: 0.5rem;
   height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
   border: none; /*Removes extra border that FF applies*/
   border-radius: 0; /*Removes default border-radius that FF applies*/

   /*custom styles*/
   background-color: white;
   height: 2rem;
   width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb {
  border: 1px solid white;
  outline: 3px solid white;
  outline-offset: 0.125rem;
}

@media (max-width: 950px){

  .icon-box{
    width: 50%;
  }
}

@media (max-width: 580px){
  .container{
    margin-bottom: 50px;
  }
  .icon-box{
    width: 50%;
  }
}


@media (max-width: 420px){
  .container{
    margin-bottom: 50px;
  }
  .icon-box{
    width: 100%;
  }
}

</style>