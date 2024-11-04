<template>
  <div>
    <h2>All Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.postId">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <p>
          <img :src="post.imageUrl" alt="Post Image" />
        </p>
        <button @click="editPost(post.postId)">Edit</button>
        <button @click="removePost(post.postId)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts, deletePost } from '../api';

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const response = await getPosts();
      this.posts = response.data;
      console.log(this.posts); // Log to check image URLs
    },
    async removePost(postId) {
      await deletePost(postId);
      this.fetchPosts(); // Refresh the list
    },
    editPost(postId) {
      this.$router.push({ name: 'EditPost', params: { postId } });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
.post img {
  max-width: 100%; /* Ensures the image does not exceed the width of its container */
  height: auto; /* Maintains the aspect ratio */
  display: block; /* Makes the image a block element */
  margin: 10px 0; /* Adds spacing above and below the image */
  border-radius: 8px; /* Rounds the corners of the image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
  transition: transform 0.3s; /* Adds a transition effect */
}

.post img:hover {
  transform: scale(1.05); /* Slightly enlarges the image on hover */
}
</style>
