<template>
  <div class="home-container">
    <header-item></header-item>
    <div class="main-wrapper">
      <main>
        <section class="posts-container" v-for="post in posts" :key="post.id">
          <post-item :post="post"></post-item>
        </section>
      </main>
      <create-post-btn @click="showModal = true">+</create-post-btn>
      <modal-form v-if="showModal" @close="showModal = false">
        <h2 slot="header">Create new post</h2>
        <post-form slot="body" @new-post="onNewPost"></post-form>
      </modal-form>
    </div>
  </div>
</template>

<script>
import CreatePostBtn from '../components/CreatePostBtn.vue'
import HeaderItem from '../components/HeaderItem.vue'
import ModalForm from '../components/ModalForm.vue'
import PostForm from '../components/PostForm.vue'
import PostItem from '../components/PostItem.vue'
export default {
  name: 'HomeView',
  components: {
    PostItem,
    PostForm,
    HeaderItem,
    CreatePostBtn,
    ModalForm,
  },
  data() {
    return {
      showModal: false,
      posts: [],
    }
  },
  created() {
    const storedPosts = JSON.parse(localStorage.getItem('vue-blog-posts'))
    if (storedPosts) {
      this.posts = storedPosts
    }
  },
  methods: {
    onNewPost: function (post) {
      console.log(post)
      this.showModal = false
      this.posts.push(post)
      this.saveOnLocalStore()
    },
    saveOnLocalStore() {
      localStorage.setItem('vue-blog-posts', JSON.stringify(this.posts))
    },
  },
}
</script>

<style scoped>
.home-container {
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

.main-wrapper {
  flex: 1;
}

.main-wrapper > main {
  position: relative;
}

.posts-container {
  display: flex;
  flex-direction: column;
}

.posts-container {
  margin-bottom: 1rem;
}
</style>
