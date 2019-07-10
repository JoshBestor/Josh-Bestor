<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">The Josh's Hip Hop Emporium Website</div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
            <div class="bg-white border border-blue-600 p-2 rounded-lg">
                <div class="text-center text-2xl">About</div>
                <p class="">
                  This was my first experiment with both Gridsome and Tailwind. I created multiple pages and my first layout for the project. The layout is the header and footer that can be found on every page. 
                </p>
                <br>
                <p>
                  Instead of focusing on making it look good, I tried to use as many TailwindCSS concepts as possible. There are multiple examples of flex boxes and buttons. I figured out how to use Imgur to import images and how to use tailwind to change how the viewer percieves the images. There is a textbox that doesn't do anything and links to other pages.
                </p>
            </div>
        </div>
        <div class="flex justify-center mb-10">
          <a href="/jhhe" class="bg-blue-600 hover:bg-blue-800 cursor-pointer border border-blue-600 text-white text-xl text-center text-semibold rounded-full px-3 py-2">Visit the Website</a>
        </div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
            <div class="flex justify-between flex-col md:flex-row bg-white border border-blue-600 rounded-lg p-2">
                <div class="content-center text-center md:text-left">You can find the code on GitHub<br>Look under src/JHHE for the content</div>
                <a href="https://github.com/JoshBestor/Josh-Bestor" class="bg-blue-600 hover:bg-blue-800 cursor-pointer border border-blue-600 text-white text-xl text-center text-semibold rounded-full px-2 py-1">Code Here</a>            
            </div>
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
