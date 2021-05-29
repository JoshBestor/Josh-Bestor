<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">PrivacyCheck© version 3</h1>
        <projectAbout>
          <p class="">
              I worked on PrivacyCheck© version 3 as my senior design project. *Explain overall concept here.
          </p>
          <br>
          <p>
            *Explain the testing suite/backend stuff for track policies.
          </p>
          <br>
          <p>
            *Explain the CAT stuff.
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
        <gitHubLink link="https://github.com/JoshBestor/WeatherApp">Content is under app/src</gitHubLink>
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
        content: 'A description of PrivacyCheck version 3 that I created.'
      },
    ]
  },

  components: {
    projectAbout,
    gitHubLink
  }
}
</script>
