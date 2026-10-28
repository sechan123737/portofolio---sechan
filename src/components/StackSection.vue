<template>
  <section id="stack" class="border-t border-white/10 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div v-reveal class="mb-9 flex flex-wrap items-baseline justify-between gap-4">
        <h2 class="text-3xl font-bold tracking-tight text-onDark"><span class="drop-cap">T</span>ech Stack</h2>
        <span class="font-mono text-xs text-onDarkDim">keahlian</span>
      </div>

      <!-- tabs -->
      <div v-reveal="{ delay: 100 }" class="glitch-tabs">
        <div class="radio-wrapper" v-for="opt in tabOptions" :key="opt.key">
          <input
            class="input"
            type="radio"
            name="stack-tabs"
            :id="`stack-tabs-${opt.key}`"
            :value="opt.key"
            v-model="activeTab"
          />
          <div class="btn">
            <span aria-hidden="true">_</span>{{ opt.label }}
            <span class="btn__glitch" aria-hidden="true">{{ opt.glitch }}</span>
            <label class="number">{{ opt.number }}</label>
          </div>
        </div>
      </div>

      <!-- panel -->
      <div v-reveal="{ delay: 180 }" class="mt-5 grid grid-cols-1 gap-8 rounded-2xl border border-[#252838] bg-[#131521] p-7 shadow-lg backdrop-blur-sm sm:p-9 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h3 class="text-lg font-semibold text-onDark">Skills &amp; Evidence</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="skill in active.skills"
              :key="skill"
              class="rounded-full border border-lime/25 bg-lime/5 px-3.5 py-1.5 text-sm text-lime"
            >
              {{ skill }}
            </span>
          </div>
          <p class="mt-6 max-w-[58ch] text-onDarkDim">{{ active.description }}</p>
        </div>

        <div class="border-white/10 lg:border-l lg:pl-8">
          <div class="flex items-center gap-2.5">
            <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-lime">+</span>
            <h3 class="text-lg font-semibold text-onDark">Related Projects</h3>
          </div>
          <div v-if="active.related.length" class="mt-4 flex flex-col gap-2.5">
            <a
              v-for="proj in active.related"
              :key="proj"
              href="#projects"
              class="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-onDark transition-colors hover:border-white/25"
            >
              <span class="font-medium">{{ proj }}</span>
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-lime">→</span>
            </a>
          </div>
          <p v-else class="mt-4 text-sm text-onDarkDim">
            Belum ada project yang dipublikasikan untuk kategori ini.
          </p>
          <a
            href="#projects"
            class="mt-4 inline-block w-full rounded-xl bg-white/10 px-4 py-2.5 text-center text-sm font-medium text-onDark transition-colors hover:bg-white/15"
          >
            Lihat Semua Project
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  {
    key: 'web',
    label: 'Web & Backend',
    skills: ['Vue 3', 'Pinia', 'Tailwind CSS', 'React (Vite)', 'Laravel 11', 'Supabase', 'PHP / MariaDB'],
    description: 'Fokus utama dari sebagian besar project — mulai dari desain skema database, RLS policy, sampai deploy ke production. Terbiasa membangun full-stack dengan Vue 3 + Supabase untuk project independen, serta React + Laravel untuk sistem berbasis role seperti CMMS.',
    related: ['ChaaLon', 'CMMS', 'EMLearnHUB', 'PAI HUB'],
  },
  {
    key: 'mobile',
    label: 'Mobile',
    skills: ['Flutter', 'Capacitor', 'Android Build'],
    description: 'Membungkus aplikasi web menjadi build Android lewat Capacitor, atau membangun langsung dengan Flutter — termasuk sistem kasir dua peran dan aplikasi booking dengan dashboard admin responsif.',
    related: ['ChaaLon', 'Warung Kopi Cashier'],
  },
  {
    key: 'iot',
    label: 'IoT Engineering',
    skills: ['NodeMCU ESP8266', 'ESP32', 'WeMos D1 Mini', 'Servo SG90', 'Blynk'],
    description: 'Merancang sistem berbasis sensor dari nol: wiring, firmware, sampai integrasi notifikasi lewat Blynk — dikerjakan bersama Kelompok 6 untuk tiga sistem berbeda, lengkap dengan dokumentasi teknis.',
    related: ['IoT Systems (Kelompok 6)'],
  },
  {
    key: 'design',
    label: 'Design Grafis',
    skills: ['Canva'],
    description: 'Membuat aset visual dan materi pendukung menggunakan Canva — mulai dari poster, konten presentasi, sampai elemen visual untuk mendukung project web dan mobile yang dikerjakan.',
    related: ['Feeds KKN'],
  },
]

const tabOptions = [
  { key: 'web', label: 'Web', glitch: '_Web💻', number: 'r1' },
  { key: 'mobile', label: 'Mobile', glitch: '_M_o_b_i_l_e_', number: 'r2' },
  { key: 'iot', label: 'IoT', glitch: 'IoT_', number: 'r3' },
  { key: 'design', label: 'Design', glitch: '_Design_', number: 'r4' },
]

const activeTab = ref('web')
const active = computed(() => categories.find((c) => c.key === activeTab.value))
</script>