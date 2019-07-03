<template>
  <Layout>
    
    <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="stylesheet" href="output.css">
  <title>Josh's Hip Hop</title>
</head>

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
    <!--Rappers-->
    <div class="p-2 bg-orange-600 mt-6 mx-4">
      <div class="text-center text-white text-xl uppercase">
        Rappers I like
      </div>
      <div class="flex flex-wrap p-2 bg-blue-100 justify-center">
        <!--If i was actually doing this, it would be in a database-->
        <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
            <span class="text-lg underline">Kendrick Lamar</span>
            <div>
              <div >Notable Albums:</div>
              <div class="flex flex-col">
                <div>Good Kid MAAD City</div>
                <div>To Pimp a Butterfly</div>
              </div>
            </div>
        </label>
        <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
            <span class="text-lg underline">J Cole</span>
            <div>
              <div >Notable Albums:</div>
              <div class="flex flex-col">
                <div>2014 Forest Hills Drive</div>
                <div>KOD</div>
              </div>
            </div>
        </label>
        <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
            <span class="text-lg underline">J.I.D.</span>
            <div>
              <div >Notable Albums:</div>
              <div class="flex flex-col">
                <div>Dicaprio 2</div>
                <div>The Never Story</div>
              </div>
            </div> 
        </label>
        <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
            <span class="text-lg underline">Kanye West</span>
            <div>
              <div >Notable Albums:</div>
              <div class="flex flex-col">
                <div>Graduation</div>
                <div>My Beautiful Dark Twisted Fantasy</div>
              </div>
            </div>
        </label>
        <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
          <span class="text-lg underline">Run the Jewels</span>
          <div>
            <div >Notable Albums:</div>
            <div class="flex flex-col">
              <div>Run the Jewels</div>
              <div>Run the Jewels 3</div>
            </div>
          </div>
      </label>
      <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
          <span class="text-lg underline">The Roots</span>
          <div>
            <div >Notable Albums:</div>
            <div class="flex flex-col">
              <div>How I Got Over</div>
              <div>Phrenology</div>
            </div>
          </div>
      </label>
      <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
          <span class="text-lg underline">Anderson Paak</span>
          <div>
            <div >Notable Albums:</div>
            <div class="flex flex-col">
              <div>Malibu</div>
              <div>Venice</div>
            </div>
          </div>
      </label>
      <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
          <span class="text-lg underline">Childish Gambino</span>
          <div>
            <div >Notable Albums:</div>
            <div class="flex flex-col">
              <div>Because the Internet</div>
              <div>Camp</div>
            </div>
          </div>
      </label>
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
    <div class="text-center h-64 lg:h-screen bg-contain bg-center bg-no-repeat m-6" style="background-image: url('/img/damn.png');">
          <p class="text-2xl inline-block bg-orange-600 rounded-lg text-white px-2">This is the GOAT</p>
    </div>
    <!--Kendrick button-->
    <div class="text-center mb-6">
      <a href="https://en.wikipedia.org/wiki/Kendrick_Lamar" class="rounded border border-orange-600 border-8 p-2 hover:bg-orange-600 cursor-pointer">Press here!</a>
    </div>
    <!--Window-->
    <div class="bg-fixed bg-center h-64 mb-6 mx-4" style="background-image: url('/img/chance trip.jpg');"></div>
    <!--Hip hop art-->
    <div class="bg-orange-600 text-center text-white mx-4 my-6 text-xl">
      <div class="text-xl">Various Hip Hop Wallpapers That I Use</div>
      <div class="w-full h-64 lg:h-screen overflow-scroll">
        <div class="flex flex-wrap p-2 bg-blue-100 justify-center">
          <img src="/img/andersonpaak.jpg" class="block mt-1">
          <img src="/img/biggie.jpg" class="block mt-1">
          <img src="/img/bobbyt2.jpg" class="block mt-1">
          <img src="/img/bronson.jpg" class="block mt-1">
          <img src="/img/chance acid rap.jpg" class="block mt-1">
          <img src="/img/frank nirvana.jpg" class="block mt-1">
          <img src="/img/gambino 3005.jpg" class="block mt-1">
          <img src="/img/jay z.jpg" class="block mt-1">
          <img src="/img/jid.jpg" class="block mt-1">
          <img src="/img/j cole.png" class="block mt-1">
          <img src="/img/kanye cartoon thing.jpg" class="block mt-1">
          <img src="/img/joey.jpg" class="block mt-1">
          <img src="/img/isaiah rashad.jpg" class="block mt-1">
        </div>
      </div>
    </div>
    <!--Footer-->
    <div class="w-full bg-orange-600 text-white flex sm:flex-col lg:flex-row justify-center">
      <div class="block">
          <h3 class="text-center text-xl py-3">Josh's Hip Hop Emporium</h3>
          <div class="text-center pb-6 cursor-wait">Logo here</div>
      </div>   
      <div class="block text-center pb-2 lg:order-first mt-4 lg:w-1/3">Designing mediocre at best websites since yesterday</div>
      <div class="block text-center pb-6 mt-4 lg:w-1/3">Instagram and Snapchat: @bestorthanu</div>
    </div>
    <div class="text-center text-white w-full bg-orange-600 text-xs py-4">Copyright © 2019 Joshua Bestor. All Rights Reserved.</div>
  </div>
</body>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
