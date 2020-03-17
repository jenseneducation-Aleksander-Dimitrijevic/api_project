<template>
  <div class="wrapper">
    <Search />
    <Gallery @image-clicked="imageClicked" />
    <Lightbox :newImage="newImage" />
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
      newImage: {}
    };
  },
  components: {
    Search,
    Gallery,
    Lightbox
  },
  methods: {
    imageClicked(newImage) {
      this.newImage = newImage;
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
