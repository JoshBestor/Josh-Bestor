<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
      <h1 class="text-center text-5xl mb-8">About me</h1>
      <div class="bg-orange-200 p-8 flex flex-col border border-blue-600 mb-8">
        <aboutMe title="Important Note" image="https://i.imgur.com/GmyYFHz.jpg" alternate="Random Guy">The information and pictures on this page are far from complete. This is just a start.</aboutMe>
        <aboutMe title="Education" image="https://i.imgur.com/GmyYFHz.jpg" alternate="Random Tech Guy">I am an Electrical and Computer Engineering student at the University of Texas who is specializing in Computer Architecture and Embedded Systems along with Software Design.</aboutMe>
        <aboutMe title="Industry Experience" image="https://i.imgur.com/Ombyz8w.png" alternate="Alara Creative logo">During the summer of 2019, I had an internship with Alara Creative through the <a class="text-blue-600 hover:text-blue-300" href="/HTT" target="_blank" rel="noreferrer">Home to Texas</a> program with the University of Texas where I learned the basics of web development.</aboutMe>
        <aboutMe title="Soccer" image="https://i.imgur.com/YWha0TW.jpg" alternate="Chelsea FC flag">I enjoy watching and playing soccer. I support the London based soccer team Chelsea FC. During college, I captain a coed and a mens intramural soccer team. During the summer I captain a soccer team in the Kerrville adult soccer league.</aboutMe>
      </div>
    </section>
  </Layout>
</template>

<script>
import aboutMe from '~/components/About_Me.vue'

export default {
  metaInfo: {
    title: 'Home',
    description: 'The official website of the Electrical and Computer Engineer Josh Bestor.'
  },

  components: {
    aboutMe
  }
}
</script>
