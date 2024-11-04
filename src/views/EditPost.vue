<!-- src/views/EditPost.vue -->

<template>
    <div>
      <h2>Edit Post</h2>
      <form @submit.prevent="updatePost">
        <label>Title:</label>
        <input v-model="title" type="text" required />
  
        <label>Content:</label>
        <textarea v-model="content" required></textarea>
  
        <label>Image URL:</label>
        <input v-model="imageUrl" type="text" />
  
        <button type="submit">Update Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getPostById, updatePost } from '../api';
  
  export default {
    data() {
      return {
        title: '',
        content: '',
        imageUrl: '',
      };
    },
    async created() {
      const { postId } = this.$route.params;
      const response = await getPostById(postId);
      const post = response.data;
      this.title = post.title;
      this.content = post.content;
      this.imageUrl = post.imageUrl;
    },
    methods: {
      async updatePost() {
        const { postId } = this.$route.params;
        const updatedPost = {
          title: this.title,
          content: this.content,
          imageUrl: this.imageUrl,
          categoryId: 1, // Placeholder ID
          userId: 1,     // Placeholder ID
        };
        await updatePost(postId, updatedPost);
        this.$router.push('/');
      },
    },
  };
  </script>
  