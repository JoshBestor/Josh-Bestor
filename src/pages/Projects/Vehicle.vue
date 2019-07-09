<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">Autonomous Vehicle</div>
        <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
          <div class="bg-white border border-blue-600 p-2 rounded-lg">
              <div class="text-center text-2xl">About</div>
              <p class="">
                This was the final project for my Introduction to Electrical Engineering class. The goal was to create an autonomous vehicle that could follow a black line on the ground. I worked in a group of six. We had discussions to decide what to do and were able to without any problems. 
              </p>
              <br>
              <p>
                The vehicle constisted of two small motors that could individually move the two tracks, a body, an arduino, a breadboard, and two color sensors. Each motor was conected seperately to the arduino so that we could controll which direction it would go. We put the sensors in front of the vehicle so that they wouldn't be influenced by shadows and connected them to the arduino. The sensors output a different voltage based on what color is underneath them.
              </p>
              <br>
              <p>
                The arduino is programed in C and at the time there were only two people in the group that knew the language. Unfortunately, I only knew assembly language at the time so I was unable to help code. The code basically just was an infinite loop of moving forward until one of the sensors detected a black line and then redirecting the vehicle to keep on the line.
              </p>
          </div>
        </div>
        <div class="border border-blue-600 bg-orange-200 p-8">
          <div class="bg-white flex flex-col justify-center border border-blue-600 rounded-lg p-2">
            <div class="text-center text-2xl">A Failed Attempt</div>
            <div class="justify-center hidden sm:inline-flex mt-2">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wHgdWEj4M3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="mt-2">Unfortuanately, this is the only video of the project that I still have. It fails on the 90 degree corner. To fix this, We moved the front sensors further apart. This caused it to go less straight overall but it could then pass the sharp corner. It goes slowly and only in small spurts because it originally went too fast and would often pass over the line.</p>
          </div>
        </div>
        <div class="justify-center sm:hidden mt-10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wHgdWEj4M3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
