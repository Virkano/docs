<script setup>
import { computed } from 'vue'

const { href } = defineProps({
  href: String,
  title: String,
})

const hrefSource = computed(() => {
  if (/bilibili\.com/.test(href)) return 'bilibili'
  if (/juejin\.cn/.test(href)) return 'juejin'
  if (/mp\.weixin\.qq/.test(href)) return 'mpwx'
  if (/weread\.qq\.com/.test(href)) return 'weread'
  else if (/youtube\.com/.test(href)) return 'youtube'
  else if (/github\.com/.test(href)) return 'github'
  else if (/zsxq\.com/.test(href)) return 'zsxq'
  else if (/vercel\.com/.test(href)) return 'vercel'
  else if (/next[-]?js/.test(href)) return 'nextjs'
  else return 'default'
})
console.log(hrefSource)
</script>
<template>
  <a class="custom-link" :href="href" target="_blank">
    <div
      class="flex group flex-col border-1 border-neutral-400 border-solid rounded-md p-4 gap-3 transition dark:border-neutral-600 duration-500 cursor-pointer my-4">
      <span
        class="text-ellipsis w-[90%] whitespace-nowrap overflow-hidden dark:opacity-90 font-600 group-hover:text-[#06f]">
        {{ title }}
      </span>
      <div class="flex item-center justify-between">
        <div class="flex items-center gap-1 w-full max-w-[75%]">
          <tabler:brand-bilibili v-if="hrefSource === 'bilibili'" class="text-blue-600 w-8 h-8" />
          <uiw:weixin v-if="hrefSource === 'weread'" class="text-blue-600 w-8 h-8" />
          <fe:youtube v-if="hrefSource === 'youtube'" class="text-red-600 w-8 h-8" />
          <bi:github v-if="hrefSource === 'github'" class="text-slate-600 w-7 h-7" />
          <ph:planet-fill v-if="hrefSource === 'zsxq'" class="text-emerald-600 w-8 h-8" />
          <uiw:weixin v-if="hrefSource === 'mpwx'" class="text-emerald-600 w-8 h-8" />
          <skill-icons:vercel-dark v-if="hrefSource === 'vercel'" class="text-zinc-800 w-7 h-7" />
          <teenyicons:nextjs-solid v-if="hrefSource === 'nextjs'" class="text-zinc-800 w-7 h-7" />
          <tabler:brand-juejin v-if="hrefSource === 'juejin'" class="text-blue-600 w-7 h-7" />
          <span class="text-ellipsis w-full whitespace-nowrap overflow-hidden text-sm opacity-75 font-500">
            {{ href }}
          </span>
        </div>
        <div class="items-center gap-1 hidden sm:flex">
          <span class="text-ellipsis w-full whitespace-nowrap overflow-hidden text-sm font-500 opacity-50">
            docs.virkano.com
          </span>
        </div>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.custom-link {
  color: unset;
  font-weight: normal;
  text-decoration-style: none;
}

.custom-link:hover {
  text-decoration: none;
}

.internal-link {
  color: var(--vp-c-brand);
  font-weight: normal;
}

.internal-link:hover {
  cursor: pointer;
}
</style>
