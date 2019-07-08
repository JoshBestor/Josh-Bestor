<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">The Josh Bestor Website</div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
            <div class="bg-white border border-blue-600 p-2 rounded-lg">
                <div class="text-center text-2xl">About</div>
                <p class="">
                    I created this website to promote my achievements and test my web development skills. I started with a Gridsome Vue.js project. For the styling I use TailwindCSS. I have connected the code with a GitHub repository and I connect the repository with the web service Netlify. Netlify deploys the code from GitHub whenever I push to the repository.
                </p>
                <br>
                <p>
                    I learned how to create this through my internship with Alara creative. During the two months I was there, I learned HTML and PHP at an intermediate level as well as the basics of Javascript. I learned how to use the Laravel framework but decided that this website did not require the complex back-end that Laravel can provide. Gridsome handles the back-end so that I only needed to create the routing and the design of the website.
                </p>
            </div>
        </div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
            <div class="flex justify-between flex-col md:flex-row bg-white border border-blue-600 rounded-lg p-2">
                <div class="content-center text-center md:text-left">You can find the code on GitHub<br>Look under src for the content</div>
                <a href="https://github.com/JoshBestor/Josh-Bestor" class="bg-blue-600 hover:bg-blue-800 cursor-pointer border border-blue-600 text-white text-xl text-center text-semibold rounded-full px-2 py-1">Code Here</a>            
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
