<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">Creating Nidhogg in C</div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
            <div class="bg-white border border-blue-600 p-2 rounded-lg">
                <div class="text-center text-2xl">About</div>
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
            </div>
        </div>
        <div class="flex bg-orange-200 border border-blue-600 mb-10 p-8">
          <div class="pr-4 w-1/2">
            <img src="https://i.imgur.com/7M26sXS.jpg?1" class="border border-blue-600">
          </div>
          <div class="pl-4 w-1/2">
            <img src="https://i.imgur.com/ZxRgOJD.gif?1" class="border border-blue-600">
          </div>
        </div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
            <div class="flex justify-between flex-col md:flex-row bg-white border border-blue-600 rounded-lg p-2">
                <div class="content-center text-center md:text-left">You can find the code on GitHub<br>It doesn't work unless I am signed in</div>
                <a href="https://github.com/EE319K-Sp18/lab-10-c-spaceinvader-josh-austin" class="bg-blue-600 hover:bg-blue-800 cursor-pointer border border-blue-600 text-white text-xl text-center text-semibold rounded-full px-2 py-1">Code Here</a>            
            </div>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
