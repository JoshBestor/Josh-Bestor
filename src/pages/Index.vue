<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
      <div class="text-center text-5xl mb-8">About me</div>
      <div class="bg-orange-200 p-8 flex flex-col border border-blue-600 mb-8">
        <div class="bg-white border border-blue-600 p-2 mb-4 rounded-lg">
          <div class="flex justify-center">
            <div class="text-2xl px-2">Education</div>
          </div>
          <div class="p-2 flex justify-center">
            <img src="https://i.imgur.com/GmyYFHz.jpg" alt="Picture of me" class="inline-block shadow-md border border-blue-600">
          </div>
          <div class="bg-white rounded-lg">I am an Electrical and Computer Engineering student at the University of Texas who is specializing in Computer Architecture and Embedded Systems along with Software Design.</div>
        </div>
        <div class="bg-white border border-blue-600 p-2 mb-4 rounded-lg">
          <div class="flex justify-center">
            <div class="text-2xl px-2">Industry Experience</div>
          </div>
          <div class="p-2 flex justify-center">
            <img src="https://i.imgur.com/Ombyz8w.png" alt="Alara Creative logo" class="inline-block shadow-md border border-blue-600">
          </div>
          <div class="bg-white rounded-lg">During the summer of 2019, I had an internship with Alara Creative through the <a class="text-blue-600 hover:text-blue-800" href="https://ic2.utexas.edu/programs/home-to-texas/">Home to Texas</a> program with the University of Texas where I learned the basics of web development.</div>
        </div>
        <div class="bg-white border border-blue-600 p-2 rounded-lg">
          <div class="flex justify-center">
            <div class="text-2xl px-2">Soccer</div>
          </div>
          <div class="p-2 flex justify-center">
            <img src="https://i.imgur.com/YWha0TW.jpg" alt="Chelsea FC flag" class="inline-block shadow-md border border-blue-600">
          </div>
          <div class="bg-white rounded-lg">I enjoy watching and playing soccer. I support the London based soccer team Chelsea FC. During college, I captain a coed and a mens intramural soccer team. During the summer I captain a soccer team in the Kerrville adult soccer league.</div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
