<template>
  <section id="about" class="border-t border-white/10 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div v-reveal class="mb-9 flex flex-wrap items-baseline justify-between gap-4">
        <h2 class="text-3xl font-bold tracking-tight text-onDark"><span class="drop-cap">T</span>entang</h2>
        <span class="font-mono text-xs text-onDarkDim">profil</span>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div v-reveal="{ variant: 'left', delay: 100 }" class="space-y-3.5 text-onDarkDim">
          <p>
            Sechan Maydi Putra adalah mahasiswa
            <strong class="font-semibold text-onDark">Informatika di Universitas Bina Sarana Informatika</strong>
            yang mengerjakan proyek software di luar maupun bersamaan dengan tugas kuliah — dari platform
            booking, sistem manajemen, hingga rangkaian IoT berbasis sensor.
          </p>
          <p>
            Sebagian besar pekerjaan dikerjakan
            <strong class="font-semibold text-onDark">full-stack</strong>: merancang skema database, membangun
            antarmuka, sampai deploy ke production — dilengkapi dokumentasi teknis seperti diagram UML, ERD,
            dan laporan penggunaan.
          </p>
        </div>
        <dl v-reveal="{ variant: 'right', delay: 200 }" class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 rounded-2xl border border-[#252838] bg-[#131521] p-6 text-sm shadow-lg backdrop-blur-sm">
          <dt class="whitespace-nowrap font-mono text-lime">Kampus</dt>
          <dd class="text-onDarkDim">Universitas Bina Sarana Informatika</dd>
          <dt class="whitespace-nowrap font-mono text-lime">Program</dt>
          <dd class="text-onDarkDim">Informatika</dd>
          <dt class="whitespace-nowrap font-mono text-lime">Fokus</dt>
          <dd class="text-onDarkDim">Web, IoT, Mobile, Design Grafis</dd>
          <dt class="whitespace-nowrap font-mono text-lime">GitHub</dt>
          <dd class="text-onDarkDim">github.com/sechan123737</dd>
        </dl>
      </div>
    </div>
  </section>
</template>