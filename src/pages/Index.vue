<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
      <h1 class="text-center text-5xl mb-8">About me</h1>
      <div class="sm:hidden border border-red-800 rounded-lg bg-red-400 text-white text-center mb-6 p-2">There is a bug where the pictures stretch. I am working on it right now, thank you for the understanding.</div>
      <div class="bg-orange-200 p-8 flex flex-col border border-blue-600 mb-8">
        <aboutMe title="Education" image="https://i.imgur.com/tueBnKX.jpg?1" alternate="Picture of me">I went to high school at Tivy High School in Kerrville Texas where I graduated in the top 2% while being the capitan of the soccer team. I am currently working towards a Bachelor in Electrical and Computer Engineering at the University of Texas with a specialization in Computer Architecture and Embedded Systems along with Software Design. I am looking for an internship in either of these fields for the summer of 2020.</aboutMe>
        <aboutMe title="Programming Languages" image="https://i.imgur.com/6GvD99C.jpg" alternate="coding picture">I have varying levels of experience with C, C++, Verilog, Assembly, Java, Python, HTML, Javascript, and PHP. I have the most experience with C, as I have taken three semesters of classes that use the language, and have programmed a video game as well as a simulated computer in it. I have taken a full semester of Assembly and of C++, where I also completed various projects, including a Plagiarism Detection Software in C++. I have taken a semester of Verilog in a digital logic class, where I created a stopwatch using Verilog. I have also taken a semester of Java where I created an android weather app. I taught myself the basics of Python and can now code simple things in it. I have also interpreted and written basic Python code in my Linear Algebra and Linear Systems and Signals classes. In my Summer Internship at Alara Creative, I learned enough HTML, Javascript, and PHP to understand and debug the code that they wrote there as well as create this website.</aboutMe>
        <aboutMe title="Experience" image="https://i.imgur.com/Ombyz8w.png" alternate="Alara Creative logo">During the summer of 2019, I had an internship with Alara Creative through the <a class="text-blue-600 hover:text-blue-300" href="/HTT">Home to Texas</a> program with the University of Texas where I learned the basics of web development. From June 2016 to August 2017 I worked at a Sonic Drive-In as a Carhop where I improved my knowledge of how to work as part of a dynamic services team.</aboutMe>
        <aboutMe title="Soccer" image="https://i.imgur.com/YWha0TW.jpg" alternate="Chelsea FC flag">I enjoy watching and playing soccer. I support the London based soccer team Chelsea FC. During college, I captain both a coed and a mens intramural soccer team. During the summer, I captain a soccer team in the Kerrville adult soccer league. My role as a captain in college and the adult league has taught me how to communicate efficiently and how to be a leader.</aboutMe>
      </div>
    </section>
  </Layout>
</template>

<script>
import aboutMe from '~/components/About_Me.vue'

export default {
  metaInfo: {
    title: 'Home',
    description: 'The official website of Josh Bestor, an Electrical and Computer Engineering student at the University of Texas at Austin specializing in Embedded Systems and Software Design.'
  },

  components: {
    aboutMe
  }
}
</script>
