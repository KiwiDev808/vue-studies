<template>
  <section>
    <form>
      <text-input
        v-model="postAuthor"
        label="Author"
        placeholder="Post author"
      />
      <text-input v-model="postTitle" label="Title" placeholder="Post title" />
      <text-input
        v-model="postContent"
        label="Content"
        placeholder="Post content"
        type="textarea"
      />
      <text-input
        v-model="postImageUrl"
        label="Image Url"
        placeholder="Image url"
      />
      <button @click.prevent="createPost">Criar</button>
    </form>
  </section>
</template>
<script>
import TextInput from './TextInput.vue'
export default {
  components: { TextInput },
  data() {
    return {
      postAuthor: '',
      postTitle: '',
      postContent: '',
      postImageUrl: '',
    }
  },
  emits: ['newPost'],
  methods: {
    createPost: function () {
      const post = {
        id: String(Math.trunc(Math.random() * 1000000)),
        title: this.postTitle,
        author: this.postAuthor,
        content: this.postContent,
        imageUrl: this.postImageUrl,
      }
      if (this.isValidPost(post)) {
        this.$emit('new-post', post)
        this.resetForm()
      } else {
        alert('Invalid Post')
      }
    },
    isValidPost: function (post) {
      if (!post.author || !post.title || !post.content) {
        return false
      }
      return true
    },
    resetForm: function () {
      this.postAuthor = ''
      this.postTitle = ''
      this.postContent = ''
      this.postImageUrl = ''
    },
  },
}
</script>
