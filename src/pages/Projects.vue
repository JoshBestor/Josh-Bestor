<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">Projects</div>
        <div class="lg:flex flex-wrap bg-orange-200 p-4 mb-12 border border-blue-600 justify-center">
          <a href="/projects/jhhe" class="border border-blue-600 rounded-lg bg-white p-2 lg:w-1/4 mb-4 lg:mx-4">
              <div class="text-center text-xl">Josh's Hip Hip Emporium</div>
              <img class="border border-blue-600 shadow-md" src="https://i.imgur.com/axA5J94.jpg" alt="Jukebox picture">
              <div>This is an extention of this website where I practiced web development techniques without much care for the design.</div>
          </a>
          <a href="/projects/vehicle" class="border border-blue-600 rounded-lg bg-white p-2 lg:w-1/4 mb-4 lg:mx-4">
              <div class="text-center text-xl">Autonomous Vehicle</div>
              <img class="border border-blue-600 shadow-md" src="https://i.imgur.com/IVY2oZB.jpg" alt="Picture of the vehicle">
              <div>This was the final project for the Intro to Electrical Engineering class. The vehicle was able to follow a black line on the ground. It was created using an arduino and various sensors.</div>
          </a>
          <a href="/projects/game" class="border border-blue-600 rounded-lg bg-white p-2 lg:w-1/4 mb-4 lg:mx-4">
              <div class="text-center text-xl">Video Game(in C)</div>
              <img class="border border-blue-600 shadow-md" src="https://i.imgur.com/AD11eGN.jpg" alt="Nidhogg icon">
              <div>This was the final project for the Intro to Embedded Systems class. I recreated the two player game Nidhogg. It was created by using a Texas Intruments microcontroller, a screen, and button and joysticks for inputs.</div>
          </a>
          <a href="/projects/site" class="border border-blue-600 rounded-lg bg-white p-2 lg:w-1/4 mb-4 lg:mx-4">
              <div class="text-center text-xl">This Website</div>
              <img class="border border-blue-600 shadow-md" src="https://i.imgur.com/Anfau8s.png" alt="Picture of the home screen">
              <div>I created this website to test my web development skills. It is a Gridsome project that uses TailwindCSS and Vue.js.</div>
          </a>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>
