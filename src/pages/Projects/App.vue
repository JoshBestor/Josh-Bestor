<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">Creating an Android weather app</h1>
        <projectAbout>
          <p class="">
            This was the final project for Software Design and Implementation II. In this class I learned Java and furthered my knowledge of data types, multithreading, machine learning, and object oriented programming.
          </p>
          <br>
          <p>
            The goal of the lab was to use Android Studio to create an Android weather app that uses Dark Sky API to get the required information. The first step in completing this lab was to learn how to use Android Studio through a combination of the documentation, YouTube tutorials, and other online resources. Once I understood the specifics of Android Studio, I used Google's Fused Location provider to get the mobile device's current location. I then made a call to the Dark Sky API and used okhttp3 and an online java class creation tool to parse the JSON that it provided. From there, all that was left was to display the information and design the user interface.
          </p>
          <br>
          <p>
            The two most interesting parts of this lab were adapting my knowledge of Java onto another platform that was different in many ways and using multithreading in the app. Multithreading is used on this app to allow refreshing of the information. It is also utilized a lot in the core Android operating system.
          </p>
        </projectAbout>
        <!-- add pic of block diagram and basys3 board
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
        -->
        <gitHubLink link="https://github.com/JoshBestor/Project_8_Cheaters">Content is under plagiarismCatcher.cpp</gitHubLink>
    </section>
  </Layout>
</template>

<script>
import projectAbout from '~/components/Project_About.vue'
import gitHubLink from '~/components/GitHub_Link.vue'

export default {
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A description of the Android weather app that I created.'
      },
    ]
  },

  components: {
    projectAbout,
    gitHubLink
  }
}
</script>
