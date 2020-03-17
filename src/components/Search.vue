<template>
  <form @submit.prevent="searchPhotos">
    <h1>Oplask</h1>
    <input type="text" v-model="searchTerm" placeholder="Search image" />
    <button>
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
import ImageServices from "../api/ImageServices";
export default {
  name: "Search",
  data() {
    return {
      searchTerm: "",
      isSubmitted: false
    };
  },
  methods: {
    searchPhotos() {
      ImageServices.getImages(this.searchTerm).then(res => {
        this.$store.dispatch("fetchedData", res.data);
      });
      this.resetOutput();
    },

    resetOutput() {
      this.searchTerm = "";
      this.isSubmitted = false;
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 90%;
  margin: auto;
  max-width: 560px;
  position: relative;

  h1 {
    margin: 3rem 0;
    font-size: 5rem;
  }

  input {
    width: 100%;
    outline: none;
    transition: 0.3s;
    font-size: 1.1rem;
    border-radius: 5px;
    border: 2px solid #eee;
    padding: 20px 20px 20px 50px;

    &:focus-within {
      border-color: #222;
    }
  }

  button {
    left: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 16px;
    position: absolute;
    background: transparent;

    i {
      color: #222;
      font-size: 2rem;
    }
  }
}

@media screen and (min-width: 768px) {
  form {
    max-width: 960px;
  }
}
</style>
