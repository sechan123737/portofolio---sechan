<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-[#252838] bg-[#0d0e18]"
    @mouseenter="pause = true"
    @mouseleave="pause = false"
  >
    <div class="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
      <div
        class="flex h-full transition-transform duration-700 ease-out"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <button
          v-for="(img, i) in images"
          :key="img"
          type="button"
          class="flex h-full w-full shrink-0 items-center justify-center p-2"
          @click="openLightbox(i)"
        >
          <img :src="img" :alt="`Slide ${i + 1}`" class="max-h-full max-w-full rounded-lg object-contain shadow-lg" />
        </button>
      </div>
    </div>

    <!-- arrows -->
    <button
      type="button"
      class="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-onDark opacity-80 transition-opacity hover:opacity-100"
      @click.stop="prev"
      aria-label="Sebelumnya"
    >
      ‹
    </button>
    <button
      type="button"
      class="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-onDark opacity-80 transition-opacity hover:opacity-100"
      @click.stop="next"
      aria-label="Berikutnya"
    >
      ›
    </button>

    <!-- dots -->
    <div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
      <button
        v-for="(img, i) in images"
        :key="`dot-${img}`"
        type="button"
        class="h-1.5 rounded-full transition-all"
        :class="i === current ? 'w-5 bg-lime' : 'w-1.5 bg-white/40 hover:bg-white/70'"
        @click.stop="goTo(i)"
        :aria-label="`Ke slide ${i + 1}`"
      />
    </div>

    <span class="absolute right-3 top-3 rounded-full bg-ink/60 px-2.5 py-1 font-mono text-[10px] text-onDark">
      {{ current + 1 }} / {{ images.length }}
    </span>
  </div>

  <!-- lightbox -->
  <Teleport to="body">
    <div
      v-if="lightboxIndex !== null"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      @click="lightboxIndex = null"
    >
      <button
        class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-onDark hover:bg-white/20"
        @click.stop="lightboxIndex = null"
        aria-label="Tutup"
      >
        ✕
      </button>
      <button
        class="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-onDark hover:bg-white/20 sm:left-6"
        @click.stop="lightboxPrev"
        aria-label="Sebelumnya"
      >
        ‹
      </button>
      <img
        :src="images[lightboxIndex]"
        class="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
        @click.stop
      />
      <button
        class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-onDark hover:bg-white/20 sm:right-6"
        @click.stop="lightboxNext"
        aria-label="Berikutnya"
      >
        ›
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  interval: { type: Number, default: 3500 },
})

const current = ref(0)
const pause = ref(false)
const lightboxIndex = ref(null)
let timer = null

function next() {
  current.value = (current.value + 1) % props.images.length
}
function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length
}
function goTo(i) {
  current.value = i
}

function lightboxNext() {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.images.length
}
function lightboxPrev() {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.images.length) % props.images.length
}
function openLightbox(i) {
  lightboxIndex.value = i
}

function startTimer() {
  stopTimer()
  timer = setInterval(() => {
    if (!pause.value && lightboxIndex.value === null) next()
  }, props.interval)
}
function stopTimer() {
  if (timer) clearInterval(timer)
}

function onKeydown(e) {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') lightboxIndex.value = null
  if (e.key === 'ArrowRight') lightboxNext()
  if (e.key === 'ArrowLeft') lightboxPrev()
}

onMounted(() => {
  startTimer()
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  stopTimer()
  window.removeEventListener('keydown', onKeydown)
})
</script>