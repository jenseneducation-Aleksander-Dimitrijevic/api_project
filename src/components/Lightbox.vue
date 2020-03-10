<template>
  <div class="light-box" v-show="modalOpen" :class="{'open-modal': modalOpen}">
    <span class="close-modal" @click="closeModal">&times;</span>
    <div class="slider-wrapper">
      <div class="user-info">
        <div>
          <img class="portrait-image" :src="portrait" />
          <h2>{{ name }}</h2>
        </div>

        <a class="download-btn" :href="download" download="Photograph">Download</a>
      </div>
      <carousel
        class="slider-content"
        :per-page="1"
        :touchDrag="true"
        :mouseDrag="true"
        paginationColor="#ccc"
        :navigate-to="currentIndex"
      >
        <slide
          class="slider-image"
          v-for="image in images.results"
          :key="image.id"
          :style="{backgroundImage: `url(${image.urls.regular})`}"
        ></slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Lightbox",
  components: {
    Carousel,
    Slide
  },
  props: [
    "images",
    "modalImage",
    "modalOpen",
    "currentIndex",
    "portrait",
    "name",
    "download"
  ],
  methods: {
    closeModal() {
      this.$emit("close-modal", this.modalImage);
    }
  }
};
</script>

<style lang="scss" scoped>
.light-box {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  transition: 0.3s;
  background: rgba(#000, 0.95);
  &.open-modal {
    display: flex;
  }

  .close-modal {
    top: 0;
    right: 2rem;
    color: #fff;
    cursor: pointer;
    font-size: 5rem;
    font-weight: 100;
    position: absolute;
  }

  .slider-wrapper {
    width: 90%;
    margin: auto;
    padding: 2rem;
    max-width: 560px;
    background: #fff;

    .user-info {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
        .portrait-image {
          width: 30px;
          margin-right: 0.5rem;
          border-radius: 50%;
        }

        h2 {
          font-size: 1rem;
        }
      }

      .download-btn {
        width: 100px;
        padding: 10px;
        color: #000;
        font-size: 0.8rem;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        border: 1px solid #000;
        text-transform: uppercase;
      }
    }

    .slider-content {
      width: 100%;
    }

    .slider-image {
      width: 100%;
      margin: auto;
      height: 300px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

@media screen and (min-width: 768px) {
  .light-box {
    .slider-content {
      height: 500px;

      .slider-image {
        height: 500px;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .light-box {
    .slider-wrapper {
      max-width: 1200px;
    }
    .slider-content {
      height: 700px;

      .slider-image {
        height: 700px;
      }
    }
  }
}
</style>
