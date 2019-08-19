<template>
  <Layout>
    
    <body class="antialiased">
      <div class="bg-blue-200">      
        <!--Three parts of rap-->
        <section class="text-white bg-orange-600 mx-4 mt-6 px-6 pb-4">
          <div class="text-center text-xl">The Three Pillars of Hip Hop</div>
          <ol class=" list-decimal text-gray-900">
            <li class="bg-blue-100 shadow rounded p-2">
              <h3 class="text-lg">Beat</h3>
              <p>Everything not included in the vocals. The background to any song.</p>
            </li>
            <li class="bg-blue-100 shadow rounded p-2 mt-2">
              <h3 class="text-lg">Flow</h3>
              <p>The way that the artist says the lyrics. Comparable to a melody in other genres.</p>
            </li>
            <li class="bg-blue-100 shadow rounded p-2 mt-2">
              <h3 class="text-lg">Lyrics</h3>
              <p>What the artist is saying. The best have interesting messages and wordplay.</p>
            </li>      
          </ol>
        </section>
        <!--Spotify Playlist-->
        <!--https://open.spotify.com/playlist/3G6lFkQr6DbaAyLAXdvTBM-->
        <div class="flex justify-center mt-6">
          <iframe src="https://open.spotify.com/embed/playlist/3G6lFkQr6DbaAyLAXdvTBM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <!--Bored button-->
        <div class="text-center my-6 text-lg">
          <div @click="counter+=1" class="inline-block text-white rounded p-2 bg-orange-600 cursor-pointer">This has been pressed {{ counter }} times</div>
        </div>
        <!--Michael button-->
        <div class="text-center my-6 text-lg">
          <a href="/jhhe/michael" class="rounded border border-orange-600 border-8 p-2 hover:bg-orange-600 cursor-pointer">Micheal Press This</a>
        </div>
        <!--Rappers-->
        <div class="p-2 bg-orange-600 mt-6 mx-4">
          <div class="text-center text-white text-xl uppercase">
            Rappers I like
          </div>
          <div class="flex flex-wrap p-2 bg-blue-100 justify-center">
            <!--If i was actually doing this, it would be in a database-->
            <artist name="Kendrick Lamar" album_1="Good Kid MAAD City" album_2="To Pimp a Butterfly"></artist>
            <artist name="J Cole" album_1="2014 Forest Hills Drive" album_2="KOD"></artist>
            <artist name="J.I.D" album_1="Dicaprio 2" album_2="The Never Story"></artist>
            <artist name="Kanye West" album_1="Graduation" album_2="My Beautiful Dark Twisted Fantasy"></artist>
            <artist name="Run the Jewels" album_1="Run the Jewels" album_2="Run the Jewels 3"></artist>
            <artist name="The Roots" album_1="How I Got Over" album_2="Phrenology"></artist>
            <artist name="Anderson .Paak" album_1="Malibu" album_2="Venice"></artist>
            <artist name="Childish Gambino" album_1="Because the Internet" album_2="Camp"></artist>
            <artist name="Tyler, the Creator" album_1="Igor" album_2="Wolf"></artist>
          </div>
        </div>
        <!--Google Button-->
        <div class="py-8 text-center text-2xl ">
          <a href="http://www.google.com" class="px-3 py-3 rounded-lg shadow-md inline-block text-white bg-gray-900 hover:bg-gray-700 cursor-pointer">
            <span class="text-blue-600">G</span><span class="text-red-600">o</span><span class="text-yellow-500">o</span><span class="text-blue-600">g</span><span class="text-green-500">l</span><span class="text-red-600">e</span> Button!
          </a>
        </div>
        <!--Enter text-->
        <div class="mx-4 flex flex-col border bg-orange-600 justify-center">
          <div class="text-center text-white">This doesn't do anything</div>
          <input class="p-4 border border-gray-500 " placeholder="Type here to waste time">
        </div>
        <!--Image with text in it-->
        <div class="text-center h-64 lg:h-screen bg-contain bg-center bg-no-repeat m-6" style="background-image: url('https://i.imgur.com/npIaEPd.png');">
              <p class="text-2xl inline-block bg-orange-600 rounded-lg text-white px-2">This is the GOAT</p>
        </div>
        <!--Window-->
        <div class="bg-fixed bg-center h-64 mb-6 mx-4" style="background-image: url('https://i.imgur.com/4W7cwDb.jpg');"></div>
        <!--Hip hop art-->
        <div class="bg-orange-600 text-center text-white mx-4 my-6 text-xl">
          <div class="text-xl">Various Hip Hop Wallpapers That I Use</div>
          <div class="w-full h-64 lg:h-screen overflow-scroll">
            <div class="flex flex-wrap p-2 bg-blue-100 justify-center">
              <img src="https://i.imgur.com/Ga2ruZN.jpg" class="block mt-1">
              <img src="https://i.imgur.com/Ltm8G6T.jpg" class="block mt-1">
              <img src="https://i.imgur.com/LsaO5d7.jpg" class="block mt-1">
              <img src="https://i.imgur.com/J7m0bL7.jpg" class="block mt-1">
              <img src="https://i.imgur.com/n1xpqHp.jpg" class="block mt-1">
              <img src="https://i.imgur.com/rJWKbIj.jpg" class="block mt-1">
              <img src="https://i.imgur.com/GJ4ZEPO.jpg" class="block mt-1">
              <img src="https://i.imgur.com/e1QXdZT.jpg" class="block mt-1">
              <img src="https://i.imgur.com/Jf8suxt.jpg" class="block mt-1">
              <img src="https://i.imgur.com/OjVQOQB.jpg" class="block mt-1">
              <img src="https://i.imgur.com/90JadRl.jpg" class="block mt-1">
              <img src="https://i.imgur.com/3k0nNTX.jpg" class="block mt-1">
              <img src="https://i.imgur.com/lmO72jd.jpg" class="block mt-1">
            </div>
          </div>
        </div>
      </div>
    </body>

  </Layout>
</template>

<script>
import Layout from '~/layouts/JHHE.vue'
import Artist from '~/components/Artist.vue'

export default {
  data: function() {
    return {
      counter: 0
    }
  },

  components: {
    Layout,
    Artist
  },
  
  metaInfo: {
    title: 'JHHE'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
