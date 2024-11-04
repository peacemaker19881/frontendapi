// src/api.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Point to your Node.js backend server
});

// Create a new post
export const createPost = (post) => api.post('/posts', post);

// Get all posts
export const getPosts = () => api.get('/posts');

// Get a single post by ID
export const getPostById = (postId) => api.get(`/posts/${postId}`);

// Update a post
export const updatePost = (postId, post) => api.put(`/posts/${postId}`, post);

// Delete a post
export const deletePost = (postId) => api.delete(`/posts/${postId}`);
