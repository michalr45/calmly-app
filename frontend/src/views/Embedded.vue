<template>
  <div class="add-form">
    <form @submit.prevent="addEmbeddedSound">
      Paste YouTube video url: &nbsp;<input type="text" v-model="urlInput">
      <input type="submit" value="Add" id="add-button">
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
  <div class="container">
    <div v-for="embeddedSound in embeddedSounds" :key="embeddedSound.id" class="item">
      <iframe width="560" height="315" :src="embeddedSound[1]" title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture" allowfullscreen>
      </iframe>
      <button @click="deleteEmbeddedSound(embeddedSound[2])">delete</button>
    </div>
  </div>
  <p v-show="loading">...loading</p>
</template>

<script>
import { axios } from "@/common/api.service";

export default {
  name: "Embedded.vue",
  data() {
    return {
      retrievedUrls: [],
      embeddedSounds: [],
      loading: false,
      urlInput: null,
      error: null,
    }
  },
  methods: {
    async getEmbeddedSounds() {
      const endpoint = '/api/embedded_sounds/';
      this.loading = true;
      try {
        const response = await axios.get(endpoint);
        this.retrievedUrls.push(...response.data);
        for (const url of this.retrievedUrls) {
          let oembed = `https://www.youtube.com/oembed?url=${url.url}`;
          let resp = await axios.get(oembed);
          let src = resp.data.html.match(/src="([^"]+)"/);
          src.push(url.id);
          this.embeddedSounds.push(src);
        }
        this.loading = false;
        console.log(this.embeddedSounds);
      } catch (error){
        console.log(error);
      }
    },
    async addEmbeddedSound() {
      if (!this.urlInput ||
          !this.urlInput.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/)) {
        this.error = 'Provided answer does not match the correct url pattern. Please use only links to YouTube videos.';
        return;
      }
      const endpoint = '/api/embedded_sounds/';
      try {
        await axios.post(endpoint, { url: this.urlInput });
        this.urlInput = null;
        location.reload();
        if (this.error) {
          this.error = null;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmbeddedSound(id) {
      const endpoint = `/api/embedded_sounds/${id}/`;
      try {
        await axios.delete(endpoint);
        location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getEmbeddedSounds();
  }
}
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}

.item{
  width: 40%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item button{
  margin-top: 10px;
  background-color: powderblue;
  border: 1px solid black;
  border-radius: 8px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  text-transform: capitalize;
}

.add-form{
  margin-top: 25px;
}

.add-form input[type="text"]{
  margin-right: 10px;
  margin-bottom: 10px;
  height: 20px;
  width: 180px;
  border: 1px solid black;
  border-radius: 6px;
}

.add-form input[type="submit"]{
  height: 25px;
  width: 60px;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}

</style>