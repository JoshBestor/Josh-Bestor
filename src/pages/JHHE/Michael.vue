<template>
  <Layout class="bg-blue-200">
    <h1 class="text-2xl mt-6 font-bold text-center">Michael Lewis Ray</h1>
    <div class="text-white m-4 bg-blue-500 rounded p-2">Michael Ray has recently gotten back into rap music. 
      <a href="https://www.music-map.com/" class="underline ">This</a> is a simple resource that I often use to suggest new artists.
    </div>
    <!--Current fav's-->
    <div class="text-white text-center m-4 rounded bg-blue-500">These are some of his favourite artists currently.
      <div class="flex flex-wrap bg-blue-300 justify-center">
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Freddie Gibbs</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">J.I.D.</div>
      </div>
    </div>
    <!--Suggestions-->
    <div class="text-white text-center m-4 rounded bg-blue-500">These are a few suggestions that I have
      <div class="flex flex-wrap bg-blue-300 justify-center">
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Run the Jewels</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Flatbush Zombies</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">The Roots</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Jay Rock</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Vince Staples</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Pusha T</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">Black Thought</div>
        <div class="bg-orange-500 rounded m-4 p-2 text-center">A$AP Ferg</div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '~/layouts/JHHE.vue'

export default {
  components: {
    Layout
  },
  
  metaInfo: {
    title: 'JHHE'
  }
}
</script>
