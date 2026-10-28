<template>
  <header id="top" class="relative overflow-hidden pb-16 pt-8 sm:pt-24">
    <!-- decorative blobs -->
    <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lime/25 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-20 top-6 h-80 w-80 rounded-full bg-blobPink/25 blur-3xl"></div>

    <!-- scattered doodles filling the side margins -->
    <svg viewBox="0 0 24 24" class="pointer-events-none absolute right-16 top-14 h-8 w-8 rotate-6 text-lime/80" fill="currentColor">
      <path d="M12 2l2.4 7.2H22l-6 4.4 2.4 7.2L12 16.4 5.6 20.8 8 13.6 2 9.2h7.6z"/>
    </svg>
    <svg viewBox="0 0 24 24" class="pointer-events-none absolute right-6 top-1/2 h-10 w-10 -rotate-12 text-blobPink/70" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M12 3l1.8 5.6H20l-4.6 3.4 1.8 5.6L12 14.2 6.8 17.6l1.8-5.6L4 8.6h6.2z"/>
    </svg>
    <svg viewBox="0 0 40 40" class="pointer-events-none absolute right-24 bottom-24 hidden h-16 w-16 text-lime/50 sm:block" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5">
      <circle cx="20" cy="20" r="18"/>
    </svg>
    <span class="pointer-events-none absolute left-10 bottom-40 hidden rotate-12 text-3xl font-bold text-blobPink/60 sm:block">+</span>
    <span class="pointer-events-none absolute right-40 top-32 hidden -rotate-6 text-2xl font-bold text-lime/60 sm:block">+</span>
    <svg viewBox="0 0 100 20" class="pointer-events-none absolute right-16 bottom-12 hidden h-4 w-24 rotate-3 text-blobPink/50 sm:block" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 10">
      <path d="M2 10c20-8 40-8 60 0s20 8 36 0"/>
    </svg>

    <div class="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
      <div class="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
        <div class="min-w-0 flex-1">
          <p v-reveal class="script-text -rotate-3 text-3xl text-lime">Hey, I'm</p>

          <div v-reveal="{ delay: 100 }" class="relative -ml-2 -mt-3 h-36 w-full max-w-xl sm:mt-0 sm:h-56">
            <ParticleText
              text="Sechan"
              :particle-size="2.2"
              :density="4"
              color="#F5F6FA"
              highlight-color="#C6FF3B"
              :scatter="190"
              :gather-duration="1600"
              :stagger="420"
              :pointer-repel="42"
              :repel-radius="120"
              :idle-drift="0.8"
              trigger="mount"
              font-size="clamp(2.75rem, 14vw, 7rem)"
              :font-weight="800"
              font-family="'Baloo 2', cursive"
              glow
            />
          </div>
        </div>

        <!-- foto profil -->
        <div v-reveal="{ variant: 'scale', delay: 180 }" class="relative shrink-0 self-center sm:self-auto">
          <div class="pointer-events-none absolute -inset-3 -z-10 rounded-[2.2rem] border border-dashed border-lime/30 sm:-inset-4"></div>
          <img
            :src="profilePhoto"
            alt="Foto profil Sechan Maydi Putra"
            class="h-36 w-36 rotate-2 rounded-[1.8rem] border-2 border-lime/40 object-cover shadow-xl transition-transform hover:rotate-0 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
          />
          <span class="script-text absolute -bottom-3 -right-2 -rotate-6 rounded-full bg-lime px-3 py-1 text-sm font-semibold text-ink shadow-md">
            Itu aku!
          </span>
        </div>
      </div>

      <p v-reveal="{ delay: 200 }" class="-rotate-1 mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-semibold text-lime sm:text-lg">
        <span>Web Developer</span><span class="text-onDarkDim">•</span>
        <span>IoT Engineer</span><span class="text-onDarkDim">•</span>
        <span>Mobile Developer</span>
      </p>

      <p v-reveal="{ delay: 280 }" class="mt-5 max-w-[52ch] text-onDarkDim">
        Mahasiswa Program Studi Informatika di Universitas Bina Sarana Informatika —
        mengerjakan aplikasi web, sistem IoT, dan aplikasi mobile secara end-to-end,
        dari desain database sampai deployment.
      </p>

      <div v-reveal="{ delay: 360 }" class="mb-14 mt-8 flex flex-wrap items-center gap-4">
        <div class="relative">
          <!-- playful pointer -->
          <div class="pointer-events-none absolute -left-28 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 sm:flex">
            <span class="script-text absolute left-1 -top-5 -rotate-8 text-lg text-lime">Cek ini!</span>
            <svg viewBox="0 0 240 160" class="h-12 w-32 -ml-2 text-lime" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M55 20
                  C65 65 95 105 155 112
                  C175 114 190 114 205 112"
                stroke="currentColor"
                stroke-width="6"
                stroke-linecap="round"
              />

              <path
                d="M195 100L220 112L195 125V100Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <a
            href="#projects"
            class="-rotate-2 inline-flex items-center gap-2 rounded-full border-2 border-lime px-6 py-3 text-sm font-bold text-lime transition-all hover:rotate-0 hover:bg-lime hover:text-ink"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Lihat Project
          </a>
        </div>
        <a
          href="/cv/CV_Sechan_Maydi_Putra.pdf"
          download
          class="rotate-2 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink shadow-sm transition-all hover:rotate-0 hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>

      <div class="flex flex-wrap gap-3">
        <div
          v-for="(item, i) in focusAreas"
          :key="item.n"
          v-reveal="{ variant: 'scale', delay: 440 + i * 80 }"
          class="w-[calc(50%-0.375rem)] rounded-2xl border border-[#252838] bg-[#131521] p-4.5 shadow-lg backdrop-blur-sm transition-transform hover:rotate-0 sm:w-[calc(25%-0.5625rem)] sm:p-5"
          :class="tilt[i % tilt.length]"
        >
          <div class="font-mono text-xs text-lime">{{ item.n }}</div>
          <div class="mt-1 font-semibold text-onDark">{{ item.t }}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ParticleText from './ParticleText.vue'
import profilePhoto from '../assets/gambar/profile.jpg'

const focusAreas = [
  { n: '01', t: 'Web Fullstack' },
  { n: '02', t: 'IoT Systems' },
  { n: '03', t: 'Mobile Apps' },
  { n: '04', t: 'Design Grafis' },
]

const tilt = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
</script>