<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">Creating Nidhogg in C</h1>
        <projectAbout>
          <p class="">
            This was the final project for the Introduction to Embedded System class. Embedded Systems are anything that takes a physical, analog input and performs actions digitally. Throughout the class, I worked with a partner and used GitHub to share code and turn in projects.
          </p>
          <br>
          <p>
            Physically, the video game consisted of a small screen, a headphone jack, the Texas Instraments microcontroller, and two cardboard controllers with joysticks and two buttons. We used a breadboard and resistors to create an DAC for the headphone jack. We wired the joysticks and the button inputs directly to the microcontroller.
          </p>
          <br>
          <p>
            The main function consisted of a loop and each player was a struct with variable for location and other statuses. We used an interrupt at 60 Hz to measure user inputs. If there was an input detected, there would be a flag set. In the loop, functions for movement, attacking, and contact were called or ignored based on the flags and variables in the player struct.
          </p>
          <br>
          <p>
            Nidhogg is a 2 player, 2D, swordfighting game. Each player can move left and right and use their sword to blockor attack high or low. The goal of our version was to kill your opponent a set number of times. Our version also had much simpler graphics and level design.
          </p>
        </projectAbout>
        <div class="flex flex-col md:flex-row bg-orange-200 border border-blue-600 mb-10 p-8">
          <div class="p-2 md:w-1/2 md:mr-8 bg-white border border-blue-600 rounded-lg">
            <div class="text-center text-2xl">A Texas Instraments Microcontroller</div>
            <img src="https://i.imgur.com/7M26sXS.jpg?1" class="border border-blue-600">
          </div>
          <div class="p-2 mt-8 md:mt-0 md:w-1/2 bg-white border border-blue-600 rounded-lg">
            <div class="text-center text-2xl md:mb-6 lg:mb-0">Nidhogg Hero</div>
            <img src="https://i.imgur.com/ZxRgOJD.gif?1" class="border border-blue-600">
          </div>
        </div>
    </section>
  </Layout>
</template>

<script>
import projectAbout from '~/components/Project_About.vue'

export default {
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A description of the Video Game that I created.'
      },
    ]
  },

  components: {
    projectAbout
  }
}
</script>
