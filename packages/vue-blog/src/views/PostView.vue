<template>
  <div class="post-view-container">
    <header-item></header-item>
    <article class="post-container">
      <h3 class="post-title">{{ post.title }}</h3>
      <img class="post-image" :src="getImage()" alt="post image" />
      <h4 class="post-author">{{ post.author }}</h4>
      <p class="post-content">{{ post.content }}</p>
    </article>
  </div>
</template>

<script>
import noImage from '../assets/no-image.jpg'
import HeaderItem from '../components/HeaderItem.vue'

export default {
  name: 'NotFoundView',
  data() {
    return {
      post: null,
    }
  },
  components: {
    HeaderItem,
  },
  created() {
    const storedPosts = JSON.parse(localStorage.getItem('vue-blog-posts'))
    console.log({ storedPosts, id: this.$route.params.id })
    if (storedPosts) {
      const foundPost = storedPosts.find((post) => {
        console.log({ truth: post.id === this.$route.params.id, id: post.id })
        return post.id === this.$route.params.id
      })
      console.log({ foundPost })
      if (foundPost) {
        this.post = foundPost
        return
      }
    }
    this.$router.push('/not-found')
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
.post-view-container {
  min-height: 100vh;
  position: relative;
  text-align: center;
  border: 3px solid rgba(0, 0, 0, 0.051);
  border-radius: 1rem;
  color: #2c3e50;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}
.post-container {
  display: flex;
  border-radius: 1rem;
  border: 2px dotted blue;
  flex-direction: column;
  padding: 1rem 2rem;
}

.post-title {
  text-align: left;
}
.post-image {
  width: 350px;
  align-self: center;
}

.post-author {
  text-align: left;
}
.post-content {
  text-align: justify;
}
</style>
