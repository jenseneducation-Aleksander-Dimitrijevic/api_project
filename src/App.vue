<template>
  <div class="wrapper">
    <Search @images="searchPhotos" />
    <Gallery @image-clicked="imageClicked" :images="images" :isSubmitted="isSubmitted" />
    <Lightbox
      @close-modal="closeModal"
      :images="images"
      :currentIndex="currentIndex"
      :modalImage="modalImage"
      :modalOpen="modalOpen"
      :portrait="portrait"
      :name="name"
      :download="download"
    />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Gallery from "@/components/Gallery.vue";
import Lightbox from "@/components/Lightbox.vue";
export default {
  name: "App",
  data() {
    return {
      images: [],
      currentIndex: null || 0,
      modalImage: null,
      isSubmitted: false,
      modalOpen: false,
      portrait: "",
      name: "",
      download: ""
    };
  },
  components: {
    Search,
    Gallery,
    Lightbox
  },
  methods: {
    searchPhotos(images, isSubmitted) {
      this.images = images;
      this.isSubmitted = isSubmitted;
    },
    imageClicked(imgUrl, currentIndex, portrait, name, download) {
      this.modalImage = imgUrl;
      this.currentIndex = currentIndex;
      this.modalOpen = !this.modalOpen;
      this.portrait = portrait;
      this.name = name;
      this.download = download;
    },
    closeModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
}
body {
  font-family: "Roboto", sans-serif;
}
</style>
