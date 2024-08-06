<script setup lang="ts">
import {data as posts} from './post.data'

</script>

<template>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.title }}</a>
    </li>
  </ul>
</template>

<style scoped>

</style>
