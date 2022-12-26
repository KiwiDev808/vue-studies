<template>
  <article class="post-container">
    <router-link :to="{ name: 'Post', params: { id: `${post.id}` } }">
      <h3 class="post-title">{{ post.title }}</h3>
    </router-link>
    <img class="post-image" :src="getImage()" alt="post image" />
    <h4 class="post-author">{{ post.author }}</h4>
    <p class="post-content">{{ post.content }}</p>
  </article>
</template>
<script>
import noImage from '../assets/no-image.jpg'
export default {
  props: {
    post: { required: true },
  },
  methods: {
    getImage() {
      if (this.isValidUrl(this.post.imageUrl)) return this.post.imageUrl
      return noImage
    },
    isValidUrl(urlString) {
      try {
        new URL(urlString)
        return true
      } catch (e) {
        return false
      }
    },
  },
}
</script>
<style scoped>
.post-container {
  display: flex;
  border-radius: 1rem;
  border: 2px dotted blue;
  flex-direction: column;
  padding: 1rem 2rem;
}

.post-title {
  cursor: pointer;
  text-align: left;
}
.post-image {
  width: 320px;
  align-self: center;
}

.post-author {
  text-align: left;
}
.post-content {
  text-align: justify;
}
</style>
