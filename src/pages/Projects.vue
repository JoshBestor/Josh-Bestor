<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">Projects</h1>
        <div class="flex flex-wrap bg-orange-200 p-4 mb-12 border border-blue-600 justify-center">
          <project uri='/projects/site' title='This Website' image='https://i.imgur.com/Anfau8s.png' alternate='Picture of the home screen' text='This is the website you are on right now. I created it to test my web development skills. It is a Gridsome project that uses TailwindCSS and Vue.js.'></project>
          <project uri='/projects/Privacy' title='PrivacyCheck©' image='https://i.imgur.com/Tmfnjzb.jpg' alternate='Picture of the PrivacyCheck logo' text='I worked on PrivacyCheck version 3 as my Senior Design Project. It is a Chrome extention that uses Machine Learning to read privacy policies score them based on GDPR regulations and a set of user control questions.'></project>
          <project uri='/projects/app' title='Android weather app' image='https://i.imgur.com/ZunBBlX.jpg' alternate='Picture' text='This was the final project for the Software Design and Implementation II class. This is an android weather app coded in Android Studio.'></project>
          <project uri='/projects/stopwatch' title='Verilog Stopwatch' image='https://i.imgur.com/SrW9PHe.jpg' alternate='Picture' text='This was the final project for Digial Logic Design. It is a stopwatch coded with Verilog on a Xilinx Basys3 FPGA board.'></project>
          <project uri='/projects/plagiarism' title='Plagiarism Detection Software' image='https://i.imgur.com/0AwzHbx.png' alternate='Picture' text='This was the final project for the Software Design and Implementation I class. The software takes up to 5,000 files and returns the files that share phrases.'></project>
          <project uri='/projects/game' title='Video Game(in C)' image='https://i.imgur.com/AD11eGN.jpg' alternate='Nidhogg icon' text='This was the final project for the Intro to Embedded Systems class. I recreated the two player game Nidhogg. It was created by using a Texas Intruments microcontroller, a screen, and button and joysticks for inputs.'></project>          
          <project uri='/projects/vehicle' title='Autonomous Vehicle' image='https://i.imgur.com/IVY2oZB.jpg' alternate='Picture of the Vehicle' text='This was the final project for the Intro to Electrical Engineering class. The vehicle was able to follow a black line on the ground. It was created using an arduino and various sensors.'></project>
          <!--make projects for lc3 stuff maybe-->
        </div>
    </section>
  </Layout>
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A collection of my favorite projects that I have undergone.'
      },
    ]
  },
  
  components: {
    Project
  }
}
</script>
