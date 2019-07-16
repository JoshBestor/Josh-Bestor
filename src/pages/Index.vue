<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
      <div class="text-center text-5xl mb-8">About me</div>
      <div class="bg-orange-200 p-8 flex flex-col border border-blue-600 mb-8">
        <about title="Education" image="https://i.imgur.com/GmyYFHz.jpg" alternate="Picture of me">I am an Electrical and Computer Engineering student at the University of Texas who is specializing in Computer Architecture and Embedded Systems along with Software Design.</about>
        <about title="Industry Experience" image="https://i.imgur.com/Ombyz8w.png" alternate="Alara Creative logo">During the summer of 2019, I had an internship with Alara Creative through the <a class="text-blue-600 hover:text-blue-800" href="https://ic2.utexas.edu/programs/home-to-texas/" target="_blank">Home to Texas</a> program with the University of Texas where I learned the basics of web development.</about>
        <about title="Soccer" image="https://i.imgur.com/YWha0TW.jpg" alternate="Chelsea FC flag">I enjoy watching and playing soccer. I support the London based soccer team Chelsea FC. During college, I captain a coed and a mens intramural soccer team. During the summer I captain a soccer team in the Kerrville adult soccer league.</about>
      </div>
    </section>
  </Layout>
</template>

<script>
import About from '~/components/About.vue'

export default {
  metaInfo: {
    title: 'Home'
  },

  components: {
    About
  }
}
</script>
