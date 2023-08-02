<script setup>
const { url } = defineProps({
  url: String,
})

const prefix = 'http://docs.virkano.com/assets'

const urlDomain = prefix + url
</script>

<template>
  <div class="overflow-hidden rounded-md my-2 md:my-4 hover:cursor-pointer">
    <img :src="urlDomain" />
  </div>
</template>
