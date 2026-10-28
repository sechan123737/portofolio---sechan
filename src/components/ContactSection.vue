<template>
  <section id="contact" class="border-t border-white/10 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div v-reveal="{ variant: 'scale' }" class="flex flex-col gap-5 rounded-2xl border border-[#252838] bg-[#131521] p-8 shadow-sm sm:p-10">
        <h2 class="text-lg font-semibold text-onDark">Mari terhubung</h2>
        <p class="mt-6 max-w-[58ch] text-onDarkDim">
          Terbuka untuk kolaborasi project, diskusi teknis, atau sekadar ngobrol soal web dan IoT.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 rounded-xl border border-lime/25 bg-lime/5 px-4 py-2.5 text-sm text-lime transition-shadow hover:shadow-sm hover:border-accent hover:text-accent"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/* ==========================================================
   KONFIGURASI MANUAL — ganti href di bawah sesuai akun kamu
   ========================================================== */
const links = [
  { label: 'Email', href: 'mailto:sechanmaydiputra12@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sechan-maydi-putra-32140a34a/' },
  { label: 'GitHub', href: 'https://github.com/sechan123737' },
  { label: 'Instagram', href: 'https://www.instagram.com/schnmydip_/' },
]
</script>