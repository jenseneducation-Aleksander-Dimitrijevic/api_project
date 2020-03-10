<template>
  <div class="gallery-container">
    <ul>
      <li
        v-for="image in images.results"
        :key="image.id"
        @click="$emit('image-clicked', image.urls.regular, images.results.indexOf(image), image.user.profile_image.medium, image.user.name, image.links.download)"
      >
        <div class="image" :style="{ backgroundImage: `url(${image.urls.small})` }"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["images"]
};
</script>

<style lang="scss" scoped>
.gallery-container {
  width: 90%;
  margin: auto;
  max-width: 960px;

  ul {
    gap: 2rem;
    width: 100%;
    display: grid;
    margin: 4rem 0;
    list-style: none;

    li {
      cursor: pointer;

      .image {
        width: 100%;
        height: 300px;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .gallery-container {
    ul {
      grid-template-columns: repeat(2, 1fr);

      li {
        .image {
          width: 100%;
          height: 300px;
          background-size: cover;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .gallery-container {
    ul {
      grid-template-columns: repeat(3, 1fr);

      li {
        .image {
          transition: 0.3s;
          position: relative;

          &:hover {
            transform: scale(1.2);
            cursor: zoom-in;
          }
        }
      }
    }
  }
}
</style>
