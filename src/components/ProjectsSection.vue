<template>
  <section id="projects" ref="sectionRef" class="border-t border-white/10 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div v-reveal class="mb-3 flex flex-wrap items-baseline justify-between gap-4">
        <h2 class="text-3xl font-bold tracking-tight text-onDark"><span class="drop-cap">P</span>roject</h2>
        <span class="font-mono text-xs text-onDarkDim">{{ projects.length }} project</span>
      </div>
      <p v-reveal="{ delay: 80 }" class="mb-8 max-w-[60ch] text-onDarkDim">
        Pilihan project dari pengembangan web, mobile, dan IoT. Klik tiap card untuk detail lengkap dan tautan repository.
      </p>

      <!-- filters -->
      <div v-reveal="{ delay: 160 }" class="glitch-tabs">
        <div class="radio-wrapper" v-for="opt in filterOptions" :key="opt.key">
          <input
            class="input"
            type="radio"
            name="project-filters"
            :id="`project-filters-${opt.key}`"
            :value="opt.key"
            v-model="activeFilter"
          />
          <div class="btn btn--icon">
            <svg viewBox="0 0 24 24" class="btn-icon" fill="none" stroke="currentColor" stroke-width="1.8">
              <template v-if="opt.icon === 'grid'">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
              </template>
              <template v-else-if="opt.icon === 'web'">
                <circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>
              </template>
              <template v-else-if="opt.icon === 'mobile'">
                <rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>
              </template>
              <template v-else-if="opt.icon === 'iot'">
                <rect x="6" y="6" width="12" height="12" rx="1"/>
                <path d="M6 10H3M6 14H3M21 10h-3M21 14h-3M10 6V3M14 6V3M10 21v-3M14 21v-3"/>
              </template>
              <template v-else-if="opt.icon === 'design'">
                <circle cx="8.5" cy="10.5" r="1.1" fill="currentColor"/>
                <circle cx="12" cy="7.5" r="1.1" fill="currentColor"/>
                <circle cx="15.5" cy="10.5" r="1.1" fill="currentColor"/>
                <path d="M12 21a9 9 0 1 1 6-15.6c1 .9 1.5 1.9 1 3-.4.9-1.4 1.1-2.3 1.1H15a2 2 0 0 0 0 4h.3c.9 0 1.7.7 1.7 1.6 0 2.7-2.7 4.9-5 4.9Z"/>
              </template>
            </svg>
            <span class="btn-label">{{ opt.label }}</span>
            <span class="btn__glitch" aria-hidden="true">{{ opt.glitch }}</span>
            <label class="number">{{ opt.number }}</label>
          </div>
        </div>
      </div>

      <!-- cards -->
      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(p, i) in filteredProjects"
          :key="p.name"
          @click="selectedProject = p"
          v-reveal="{ variant: 'scale', delay: (i % 6) * 90 }"
          class="cursor-pointer overflow-hidden rounded-2xl border border-[#252838] bg-[#131521] shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-white/20"
        >
          <!-- banner -->
          <div class="relative h-48 overflow-hidden bg-gradient-to-br" :class="p.banner">
            <span class="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink">
              {{ p.categories[0] }}
            </span>

            <span
              v-if="p.inProgress"
              class="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-amber-400/95 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-ink shadow-sm"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-ink"></span>
              Dalam Pengembangan
            </span>

            <template v-if="p.images && p.images.length">
              <img
                v-for="img in p.images"
                :key="img"
                :src="img"
                class="h-full w-full object-cover object-top"
              />
            </template>

            <span
              v-else
              class="flex h-full items-center justify-center px-4 text-center font-display text-2xl font-bold text-white/90"
            >
              {{ p.name }}
            </span>
          </div>

          <div class="flex flex-col gap-3 p-5">
            <div>
              <div class="mb-2 font-mono text-[10px] uppercase tracking-wide text-onDarkDim">Tech Stack</div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="chip in p.chips.slice(0, 3)"
                  :key="chip"
                  class="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[11px] text-onDark"
                >
                  {{ chip }}
                </span>
                <span
                  v-if="p.chips.length > 3"
                  class="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[11px] text-onDarkDim"
                >
                  +{{ p.chips.length - 3 }}
                </span>
              </div>
            </div>

            <h3 class="text-lg font-semibold text-onDark">{{ p.name }}</h3>
            <p class="line-clamp-2 text-sm text-onDarkDim">{{ p.description }}</p>

            <div class="mt-1 flex items-center justify-end border-t border-white/10 pt-3">
              <span class="inline-flex items-center gap-1 text-sm font-medium text-lime">
                Details →
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
    <Floatingcontactbar :visible="showContactBar" />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ProjectModal from './ProjectModal.vue'
import Floatingcontactbar from './Floatingcontactbar.vue'
import tahappengebanganImg from '../assets/gambar/Tahap Pengembangan.jpg'
import chaalonImg from '../assets/gambar/ChaaLon.jpg'
import emlearnImg from '../assets/gambar/EMLearn.jpg'
import PaiHubImg from '../assets/gambar/PAIHUB.jpg'
import iotImg from '../assets/gambar/iot Jemuran Otomatis.jpg'
import warkopImg from '../assets/gambar/Warkop.jpg'

// Auto-import semua gambar design: src/assets/design/<nama-folder>/<apa-saja>.png|jpg|dst
// Tinggal taruh file baru di folder yang sesuai, tidak perlu tambah baris import manual lagi.
const designModules = import.meta.glob(
  '../assets/design/*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
)

function getDesignGallery(folder) {
  const target = `/design/${folder}/`.toLowerCase()
  return Object.keys(designModules)
    .filter((path) => path.toLowerCase().includes(target))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => designModules[path])
}

// Urutan slide ikut urutan nama file (abjad/angka), jadi kalau mau urutan tertentu,
// kasih prefix angka di nama file: 01-xxx.jpg, 02-xxx.jpg, dst.
const feedsKknGallery = getDesignGallery('FeedsKKN')


const activeFilter = ref('all')
const selectedProject = ref(null)
const sectionRef = ref(null)
const showContactBar = ref(false)
let observer = null

const filterOptions = [
  { key: 'all', label: 'Semua', icon: 'grid', glitch: 'ALL_', number: 'f1' },
  { key: 'web', label: 'Web', icon: 'web', glitch: '_Web_', number: 'f2' },
  { key: 'mobile', label: 'Mobile', icon: 'mobile', glitch: '_Mobile_', number: 'f3' },
  { key: 'iot', label: 'IoT', icon: 'iot', glitch: 'IoT_', number: 'f4' },
  { key: 'design', label: 'Design', icon: 'design', glitch: '_Design_', number: 'f5' },
]

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      showContactBar.value = entry.isIntersecting
    },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const projects = [
  {
    name: 'ChaaLon',
    categoryLabel: 'Web · Mobile',
    categories: ['web', 'mobile'],
    banner: 'from-orange-400 to-pink-500',
    description: 'Platform booking salon dengan wizard reservasi multi-step, dashboard admin, dan build Android. Dilengkapi RLS policy dan database trigger.',
    chips: ['Vue 3', 'Supabase', 'Capacitor'],
    repoUrl: 'https://github.com/sechan123737/Aplikasi-Booking-Salon-Barbershop-.git',
    images: [chaalonImg],
    details: [
      'Wizard booking multi-step dengan RLS policy dan database trigger',
      'Dashboard admin dengan layout responsif (mobile & sidebar desktop)',
      'Login Google OAuth, upload foto profil, dan deep linking',
      '10 diagram UML sequence + ERD notasi Chen untuk dokumentasi',
    ],
  },
  {
    name: 'EMLearnHUB',
    categoryLabel:  'Web · Mobile',
    categories: ['web', 'mobile'],
    banner: 'from-cyan-400 to-blue-600',
    description: 'Platform e-learning teknik otomotif (mekanik mesin bensin) dengan ringkasan mingguan berbasis hasil kuis dan 14 tampilan admin responsif.',
    chips: ['Vue 3', 'Supabase', 'Vercel'],
    repoUrl: 'https://github.com/sechan123737/EMLearnHub-Media-Pembelajaran-Mekanik-Motor-Bensin.git',
    images: [emlearnImg],
    details: [
      '14 tampilan admin dioptimalkan untuk mobile',
      'Ringkasan mingguan otomatis dari hasil kuis siswa',
      'Migrasi ikon emoji ke gambar dengan mapping terpusat',
      'Deploy otomatis ke Vercel lewat GitHub',
    ],
  },
  {
    name: 'PAI HUB',
    categoryLabel: 'Web · Mobile',
    categories: ['web', 'mobile'],
    banner: 'from-emerald-400 to-teal-600',
    description: 'Platform edukasi Pendidikan Agama Islam dengan upload gambar kategori dan routing tombol kembali yang dinamis.',
    chips: ['Vue.js', 'Supabase'],
    repoUrl: 'https://github.com/langss1/PAI',
    images: [PaiHubImg],
    details: [
      'Embed Canva untuk materi pembelajaran interaktif',
      'Upload gambar kategori dengan workaround cache schema PostgREST',
      'Routing tombol kembali yang dinamis mengikuti halaman',
    ],
  },
  {
    name: 'Warkop',
    categoryLabel: 'Web',
    categories: ['web'],
    banner: 'from-amber-400 to-orange-600',
    description: 'Aplikasi kasir dengan dua peran (pelanggan & kasir), sistem gambar berbasis base64, dan akses kasir tersembunyi lewat 5-tap logo.',
    chips: ['Flutter', 'PHP', 'MariaDB'],
    repoUrl: 'https://github.com/Naces17/warung-kopi-cashier',
    images: [warkopImg],
    details: [
      'Dua peran: pelanggan dan kasir',
      'Sistem gambar berbasis base64',
      'Akses kasir tersembunyi lewat 5-tap logo',
      'Berjalan di atas PHP/MariaDB dengan XAMPP',
    ],
  },
  {
    name: 'IoT Systems Jemuran Otomatis',
    categoryLabel: 'IoT',
    categories: ['iot'],
    banner: 'from-lime-400 to-green-600',
    description: 'Tiga sistem berbasis sensor: jemuran otomatis, pengumpan ikan otomatis, dan sistem deteksi pencurian — lengkap dengan diagram wiring.',
    chips: ['ESP8266', 'ESP32', 'Blynk'],
    repoUrl: 'https://github.com/Naces17/iot-projects',
    images: [iotImg],
    details: [
      'Jemuran otomatis: ESP8266 + sensor hujan FC-37 + servo SG90',
      'Pengumpan ikan otomatis: WeMos D1 Mini + servo + notifikasi Blynk',
      'Deteksi pencurian: ESP32 + sensor magnetik + notifikasi Blynk',
      'Dokumentasi lengkap: laporan teknis, presentasi, dan diagram wiring',
    ],
  },
  {
    name: 'Design Grafis',
    categoryLabel: 'Design',
    categories: ['design'],
    banner: 'from-pink-400 to-fuchsia-600',
    description: 'Kumpulan desain grafis untuk kebutuhan kampus dan organisasi — mulai dari feeds media sosial, banner, hingga materi promosi, dirancang menarik, informatif, dan mudah dipahami.',
    chips: ['Canva'],
    // linkUrl: 'https://canva.link/38bthp0snaqi1gy',
    // linkLabel: 'Lihat di Canva',
    images: [feedsKknGallery[0]],
    gallery: feedsKknGallery,
    details: [
      'Desain feeds KKN Desa Cikedokan: info akademik, kegiatan, dan pengumuman',
      'Konsistensi visual, tata letak, dan tipografi dijaga di tiap desain',
      'Mengikuti identitas visual kampus/organisasi terkait',
    ],
  },
  {
    name: 'CMMS',
    categoryLabel: 'Web',
    categories: ['web'],
    banner: 'from-purple-500 to-indigo-600',
    description: 'Computerized Maintenance Management System dengan 4 dashboard role (Admin, Supervisor, Teknisi, Manager) dan export Excel/PDF.',
    chips: ['React', 'Laravel 11', 'Supabase'],
    repoUrl: 'https://github.com/Naces17/cmms-app',
    images: [tahappengebanganImg],
    inProgress: true,
    details: [
      '4 dashboard role: Admin, Supervisor, Teknisi, Manager',
      'Modul mesin, work order, spare part, log maintenance, laporan kerusakan',
      'Export laporan ke Excel dan PDF',
      'Autentikasi via Sanctum, hak akses via Spatie',
    ],
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.categories.includes(activeFilter.value))
})
</script>