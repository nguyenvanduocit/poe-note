<script setup lang="ts">
import {useData} from "vitepress";
import {computed} from "vue";
const data = useData()
const shouldShowSource = computed(() => {
  return data.frontmatter.value?.author || data.frontmatter.value?.originalUrl
})
</script>

<template>
  <div v-if="shouldShowSource" class="flex-table info custom-block github-alert">
    <div class="flex-row" v-if="data.frontmatter.value?.author">
      <p class="flex-cell-title">Author:</p>
      <p class="flex-cell">{{ data.frontmatter.value?.author }}</p>
    </div>
    <div class="flex-row" v-if="data.frontmatter.value?.originalUrl">
      <p class="flex-cell-title">Origin:</p>
      <p class="flex-cell">
        <a :href="data.frontmatter.value?.originalUrl" target="_blank" rel="noopener">View article</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.flex-table {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.flex-row {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
}

.flex-cell-title{
  font-weight: bold;
  color: var(--vp-c-text-1)
}

.flex-cell-title, .flex-cell {
  justify-content: center;
  margin: 0;
}
</style>
