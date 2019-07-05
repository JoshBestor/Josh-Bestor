<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">Projects</div>
        <div class="flex flex-row flex-wrap bg-orange-200 p-4 mb-12 border border-blue-600 justify-between">
            <div class="border border-blue-600 rounded-lg bg-white p-2 w-1/4">
                <div class="text-center text-xl">Josh's Hip Hip Emporium</div>
                <img class="border border-blue-600" src="https://i.imgur.com/axA5J94.jpg">
                <div>This is an extention of this website where I practiced web development techniques without much care for the design. Click <a  href="/jhhe/" class= "underline text-blue-600">here</a> to access it.</div>
            </div>
            <div class="border border-blue-600 rounded-lg bg-white p-2 w-1/4">
                <div class="text-center text-xl">Autonomous Vehicle</div>
                <img class="border border-blue-600" src="https://i.imgur.com/IVY2oZB.jpg">
                <div>This was the final project for the Intro to Electrical Engineering class. The vehicle was able to follow a black line on the ground. It was created using an arduino and various sensors.</div>
            </div>
            <div class="border border-blue-600 rounded-lg bg-white p-2 w-1/4">
                <div class="text-center text-xl">Video Game(in C)</div>
                <img class="border border-blue-600" src="https://i.imgur.com/AD11eGN.jpg">
                <div>This was the final project for the Intro to Embedded Systems class. I recreated the two player game Nidhogg. It was created by using a Texas Intruments microcontroller, a screen, and button and joysticks for inputs.</div>
            </div>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
