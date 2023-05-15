<template>
  <section v-motion-slide-bottom class="pb-10 md:h-[42rem]">
    <div class="about">
      <h1 class="text-xl text-center">Quick links</h1>
    </div>
    <section class="m-auto md:max-w-4xl my-4 w-1/2">
      <h5
        class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5"
      >
        Guides
      </h5>
      <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <div v-for="item in guides" :key="item.name">
          <a :href="item.link" target="_blank">
            <div class="p-4 rounded-lg flex items-center space-x-4 btn">
              <i :class="item.icon"></i>
              <div class="rounded-lg flex"></div>
              <span class="flex-1 truncate text-sm"> {{ item.name }} </span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="m-auto md:max-w-4xl my-4 w-1/2">
      <h5
        class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5"
      >
        Dependency
      </h5>
      <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <div v-for="item in dependency" :key="item.name">
          <a :href="item.link" target="_blank">
            <div class="p-4 rounded-lg flex items-center space-x-4 btn">
              <i :class="item.icon"></i>
              <div class="rounded-lg flex"></div>
              <span class="flex-1 truncate text-sm"> {{ item.name }} </span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="m-auto md:max-w-4xl my-4 w-1/2">
      <h5
        class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5"
      >
        Services
      </h5>
      <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
        <div v-for="item in services" :key="item.name">
          <a :href="item.link" target="_blank">
            <div class="p-4 rounded-lg flex items-center space-x-4 btn">
              <i :class="item.icon"></i>
              <div class="rounded-lg flex"></div>
              <span class="flex-1 truncate text-sm"> {{ item.name }} </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      guides: [
        {
          name: 'Vue Js',
          icon: 'bx bxl-vuejs text-2xl',
          link: 'https://vuejs.org/guide/'
        },
        {
          name: 'Tailwind Css',
          icon: 'bx bxl-tailwind-css text-2xl',
          link: 'https://tailwindcss.com/docs/configuration'
        },
        {
          name: 'Vite Js',
          icon: 'bx bxl-javascript text-2xl',
          link: 'https://vitejs.dev/guide/'
        }
      ],
      dependency: [
        {
          name: 'Vue Use',
          icon: 'bx bxs-mouse-alt text-2xl',
          link: 'https://vueuse.org/guide/'
        },
        {
          name: 'VueUse/Motion',
          icon: 'bx bx-run text-2xl',
          link: 'https://motion.vueuse.org/presets.html'
        },
        {
          name: 'Boxicons',
          icon: 'bx bxs-cube-alt text-2xl',
          link: 'https://boxicons.com/'
        }
      ],
      services: [
        {
          name: 'Github',
          icon: 'bx bxl-github text-2xl',
          link: 'https://github.com/'
        },
        {
          name: 'Netlify',
          icon: 'bx bxl-netlify text-2xl',
          link: 'https://app.netlify.com/'
        },
        {
          name: 'Vercel',
          icon: 'bx bxs-up-arrow text-2xl',
          link: 'https://vercel.com/dashboard'
        },
        {
          name: 'AWS',
          icon: 'bx bxl-aws text-2xl',
          link: 'https://console.aws.amazon.com/console/home'
        },
        {
          name: 'Firebase',
          icon: 'bx bxl-firebase text-2xl',
          link: 'https://console.firebase.google.com/'
        }
      ]
    }
  }
}
</script>

<style></style>
