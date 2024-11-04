<template>
  <div>
    <h2>Create a New Post</h2>
    <form @submit.prevent="submitPost">
      <label>Title:</label>
      <input v-model="title" type="text" required /><br><br>

      <label>Content:</label>
      <textarea v-model="content" required></textarea><br><br>

      <label>Image:</label>
      <input type="file" @change="handleFileUpload" required /><br><br>

      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script>
import { createPost } from '../api';

export default {
  data() {
    return {
      title: '',
      content: '',
      imageFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      // Capture the file from the input
      this.imageFile = event.target.files[0];
    },
    async submitPost() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('image', this.imageFile); // Append the image file
      formData.append('categoryId', 1); // Placeholder ID for now
      formData.append('userId', 1);     // Placeholder ID for now

      await createPost(formData);
      this.$router.push('/'); // Redirect to home after creating the post
    },
  },
};
</script>

