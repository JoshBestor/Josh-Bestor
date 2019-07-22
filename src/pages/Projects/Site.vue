<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">The Josh Bestor Website</div>
        <projectAbout>
          <p class="">
            I created this website to promote my achievements and test my web development skills. I started with a Gridsome Vue.js project. For the styling I use TailwindCSS. I have connected the code with a GitHub repository and I connect the repository with the web service Netlify. Netlify deploys the code from GitHub whenever I push to the repository.
          </p>
          <br>
          <p>
            I learned how to create this through my internship with Alara creative. During the two months I was there, I learned HTML and PHP at an intermediate level as well as the basics of Javascript. I learned how to use the Laravel framework but decided that this website did not require the complex back-end that Laravel can provide. Gridsome handles the back-end so that I only needed to create the routing and the design of the website.
          </p>
        </projectAbout>
        <gitHubLink link="https://github.com/JoshBestor/Josh-Bestor">Look under src for the content</gitHubLink>
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
        content: 'A description of the website that you are currently on.'
      },
    ]
  },

  components: {
    projectAbout,
    gitHubLink
  }
}
</script>
