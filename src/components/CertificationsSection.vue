<template>
  <section id="certifications" class="border-t border-white/10 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-9 flex flex-wrap items-baseline justify-between gap-4">
        <h2 class="text-3xl font-bold tracking-tight text-onDark"><span class="drop-cap">S</span>ertifikasi</h2>
        <span class="font-mono text-xs text-onDarkDim">pelatihan &amp; sertifikat</span>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="(cert, i) in certifications"
          :key="cert.title"
          v-reveal="{ delay: i * 80 }"
          class="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm transition-colors hover:border-white/20"
        >
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="8" r="5"/>
              <path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5"/>
            </svg>
          </span>
          <div>
            <h3 class="font-semibold text-onDark">{{ cert.title }}</h3>
            <p class="mt-1 text-sm text-onDarkDim">{{ cert.issuer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  {
    title: 'IT Bootcamp',
    issuer: 'Transformasi Digital: Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan',
  },
  {
    title: 'Workshop Machine Learning',
    issuer: 'Programming',
  },
  {
    title: 'PCAP — Programming Essentials in Python',
    issuer: 'Cisco Networking Academy (Netacad)',
  },
  {
    title: 'MikroTik MTCNA',
    issuer: 'Sertifikasi jaringan MikroTik',
  },
  {
    title: 'IBM SkillsBuild',
    issuer: 'Software Engineering for Web Developers Pathway (Earn 6 microcredentials!)',
  },
  {
    title: 'FreeCodeCamp',
    issuer: 'Python Certification',
  },
  {
    title: 'FreeCodeCamp',
    issuer: 'A2 English for Developer Certification',
  },
]
</script>