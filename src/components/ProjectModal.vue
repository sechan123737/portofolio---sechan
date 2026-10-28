<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="project"
        class="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
        @click="$emit('close')"
      ></div>
    </Transition>

    <Transition name="slide">
      <aside
        v-if="project"
        class="fixed inset-y-0 right-0 z-50 w-full max-w-lg overflow-y-auto rounded-l-2xl bg-[#141632] shadow-xl sm:max-w-2xl"
      >
        <!-- banner -->
        <div class="relative flex h-44 items-center justify-center overflow-hidden rounded-tl-2xl bg-gradient-to-br" :class="project.banner || 'from-cyan to-accent'">
          <template v-if="project.images && project.images.length">
            <img
              v-for="img in project.images"
              :key="img"
              :src="img"
              class="h-full w-full object-cover object-top"
            />
          </template>
          <span v-else class="px-6 text-center font-display text-3xl font-bold text-white/90">{{ project.name }}</span>
          <button
            @click="$emit('close')"
            class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        <div class="p-6 sm:p-8">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="font-mono text-xs font-semibold uppercase tracking-wide text-lime">
              {{ project.categoryLabel }}
            </div>
            <span
              v-if="project.inProgress"
              class="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-amber-300"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400"></span>
              Dalam Pengembangan
            </span>
          </div>
          <h3 class="mt-2 text-2xl font-bold text-onDark">{{ project.name }}</h3>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="chip in project.chips"
              :key="chip"
              class="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-onDark"
            >
              {{ chip }}
            </span>
          </div>

          <p class="mt-5 text-onDarkDim">{{ project.description }}</p>

          <p v-if="project.inProgress" class="mt-3 flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-xs text-amber-200">
            <span>⚠️</span>
            <span>Project ini masih dalam tahap pengembangan aktif — fitur dan tampilan masih bisa berubah.</span>
          </p>

          <div v-if="project.gallery?.length" class="mt-5">
            <div class="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-onDarkDim">
              Galeri Design
            </div>
            <ImageCarousel :images="project.gallery" />
          </div>

          <ul v-if="project.details?.length" class="mt-4 space-y-2">
            <li
              v-for="d in project.details"
              :key="d"
              class="flex gap-2 text-sm text-onDarkDim"
            >
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime"></span>
              <span>{{ d }}</span>
            </li>
          </ul>

          <div class="mt-7 border-t border-white/10 pt-5">
            <div class="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-onDarkDim">
              Project Resources
            </div>
            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener"
              class="btn-github"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                  fill="currentcolor"
                ></path>
              </svg>
              <span>View on Github</span>
            </a>
            <a
              v-else-if="project.linkUrl"
              :href="project.linkUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {{ project.linkLabel || 'Lihat Project' }}
            </a>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'
import ImageCarousel from './ImageCarousel.vue'

const props = defineProps({
  project: { type: Object, default: null },
})
const emit = defineEmits(['close'])

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.project,
  (val) => {
    if (val) {
      window.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden'
    } else {
      window.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    }
  }
)

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>