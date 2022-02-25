<template>
  <div class="container">
    <div v-for="playlist in playlists" :key="playlist.id" class="playlist-item">
        <button @click="playPlaylist(playlist.id); changeButtonColor($event.target)" class="playlist-btn">{{ playlist.name }}</button>
        <button @click="deletePlaylist(playlist.id)" class="delete-button">delete</button>
    </div>
  </div>
  <div class="container">
      <div class="icon-box" v-for="item in playlistItems" :key="item.id">
          <img :src="item[0]" @click="playAudio($event)">
          <audio loop autoplay>
            <source :src="item[1]">
          </audio>
          <input type="range" :value="setDefaultSliderPosition(item[2])" min="0" max="100" step="1"
                 @change="setVolume($event, $event.target.value)"
          >
      </div>
    </div>
</template>

<script>
import { axios } from "@/common/api.service";
import { nextTick } from 'vue';

export default {
  name: "Playlists",
  data() {
    return {
      playlists: [],
      playlistItems: [],
    }
  },
  methods: {
    async getPlaylists(){
      const endpoint = '/api/playlists/playlists/';
      try {
        const response = await axios.get(endpoint);
        this.playlists.push(...response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async playPlaylist(id){
      this.playlistItems = [];
      const endpoint = `/api/playlists/playlists/${id}/`;
      try {
        const response = await axios.get(endpoint);
        this.playlistItems.push(...response.data.sounds);
      } catch (error) {
        console.log(error);
      }
      await nextTick()
      let sounds = document.querySelectorAll('audio');
      for (let i = 0; i < sounds.length; i++) {
        sounds[i].volume = this.playlistItems[i][2]
      }
    },
    playAudio(element) {
      let audio = element.target.nextSibling;
      let elementImage = element.target.src.split('.png')[0]
      if (audio.paused) {
        audio.play();
        element.target.src = elementImage + '-white.png';
      } else {
        audio.pause();
        element.target.src = element.target.src.split('-white.png')[0] + '.png';
      }
    },
    setVolume(element, value) {
      let audio = element.target.previousSibling;
      audio.volume = value / 100;
    },
    setDefaultSliderPosition(item){
      if (item !== '1' && item !== '0') {
        item = item.split('.')[1]
        if (item.length === 1) {
          item += '0'
        }
        return item
      } else if (item === '1'){
        item = '100'
        return item
      } else if (item === '0') {
        item = '0'
        return item
      }
    },
    changeButtonColor(button) {
      const btns = document.querySelectorAll('.playlist-btn');
      const deleteBtns = document.querySelectorAll('.delete-button');
      for (let btn of btns){
        btn.classList.remove('active');
      }
      for (let deleteBtn of deleteBtns){
        deleteBtn.classList.remove('active');
      }
      button.classList.toggle('active');
      button.nextSibling.classList.toggle('active');
    },
    async deletePlaylist(id) {
      const endpoint = `/api/playlists/playlists/${id}/`;
      try {
        await axios.delete(endpoint);
        location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getPlaylists();
  },
}
</script>

<style scoped>

.playlist-item{
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.playlist-item .playlist-btn{
  width: auto;
  height: 30px;
  background: transparent;
  color: white;
  border: 1px solid black;
  border-radius: 6px;
  font-weight: bold;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  transition: 0.4s all;
  margin-bottom: 10px;
}

.playlist-item .playlist-btn:hover, .playlist-btn.active{
  background-color: powderblue;
  color: black;
}

.delete-button{
  width: auto;
  height: 30px;
  background-color: darkred;
  color: white;
  border: 1px solid black;
  border-radius: 6px;
  font-weight: bold;

  cursor: pointer;
  display: none;
}

.delete-button.active{
  display: block;
}

</style>