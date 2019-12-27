<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">Creating a Stopwatch in Verilog</h1>
        <projectAbout>
          <p class="">
            This was the final project for the Digital Logic Design class. In the class we learned the basics of digital logic starting with logic gates and ending with datapath components and high level state machines. Throughout the class we had labs using Verilog to create different components on a Xilinx Basys 3 FPGA board with part number XC7A35TCPG236-1.
          </p>
          <br>
          <p>
            The goal of the project was to create a stopwatch that can count up or down from either 00.00, 99.99, or a manually set value. The first step in completing this project was to model the watch using a block diagram to figure out what code I can reuse and what I need to create. From previous labs, I had a hexadecimal to seven segment converter, a clock divider, a load register, a  4 bit carry lookahead adder(CLA), and a finite state machine for the seven segment display. I modified these to reuse them in this lab.
          </p>
          <br>
          <p>
            After adding the reused code, I needed to create a main controller module, a button debouncer, a state machine for the mode selection, and a timer module that contained an up-down counter. The up-down counter used an incrementer and decrementer made from the CLA and the load register.
          </p>
        </projectAbout>
        <!-- add pic of block diagram and basys3 board
        <div class="flex flex-col md:flex-row bg-orange-200 border border-blue-600 mb-10 p-8">
          <div class="p-2 md:w-1/2 md:mr-8 bg-white border border-blue-600 rounded-lg">
            <div class="text-center text-2xl">A Texas Instraments Microcontroller</div>
            <img src="https://i.imgur.com/7M26sXS.jpg?1" class="border border-blue-600">
          </div>
          <div class="p-2 mt-8 md:mt-0 md:w-1/2 bg-white border border-blue-600 rounded-lg">
            <div class="text-center text-2xl md:mb-6 lg:mb-0">Nidhogg Hero</div>
            <img src="https://i.imgur.com/ZxRgOJD.gif?1" class="border border-blue-600">
          </div>
        </div>
        -->
        <gitHubLink link="https://github.com/JoshBestor/Project_8_Cheaters">Content is under plagiarismCatcher.cpp</gitHubLink>
    </section>
  </Layout>
</template>

<script>
import projectAbout from '~/components/Project_About.vue'

export default {
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A description of the Verilog Stopwatch that I created.'
      },
    ]
  },

  components: {
    projectAbout
  }
}
</script>
