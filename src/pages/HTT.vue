<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
      <h1 class="text-center text-5xl mb-8">Home to Texas</h1>
      <div class="flex flex-col md:flex-row bg-orange-200 border border-blue-600 mb-10 p-8">
        <div class="p-2 md:w-1/2 md:mr-8 bg-white border border-blue-600 rounded-lg mb-4 md:mb-0">
          <img alt="The inagural HTT program members" src="https://i.imgur.com/4XT2hpP.jpg" class="border border-blue-600">
        </div>
        <div class="p-2 md:w-1/2 md:mr-8 bg-white border border-blue-600 rounded-lg flex flex-col justify-between">
          <h2 class="text-2xl text-center">The Inaugural HTT Class</h2>
          <p class="text-center">The Home to Texas program was created by the head of the IC^2, Dr. Art Markman, the senior research scientist of the IC^2, Dr. Gregory Pogue, and the something, Dr. Anderson.</p>
          <div class="flex flex-row text-s">
            <div class="p-6 ml-2">  
              <p>Back Row (Left to Right):</p>
              <ul class="list-disc">
                <li>Alfredo Huitron (McAllen)</li>
                <li>Dr. Art Markman</li>
                <li>Dr. Anderson</li>
                <li>Sean Hart (Brenham)</li>
                <li>Josh Bestor (Kerrville)</li>
              </ul>
            </div>
            <div class="p-6 ml-2">
              <p>Front Row (Left to Right):</p>
              <ul class="list-disc">
                <li>Victor Torres (McAllen)</li>
                <li>Alyssa Garcia (McAllen)</li>
                <li>Shaena Reyes (McAllen)</li>
                <li>Ming Schneider (Amarillo)</li>
                <li>Wendy Montano (McAllen)</li>
                <li>Dr. Gregory Pogue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
        <div class="bg-white border border-blue-600 p-2 rounded-lg">
          <h2 class="text-center text-2xl">About</h2>
          <div>Home to Texas (HTT) is a new program offered by the College of Undergraduate Studies, IC^2 institute, and Texas Exes at The University of Texas at Austin (UT) to re-introduce UT students to their hometowns through internship and research. HTT is derived from the "Gone to Texas" initiative at UT which introduces new students to Austin and UT as they start their time on the 40 Acres. However HTT reverses these goals by asking students to engage deeply with their hometowns through interning in a local company, government office, or not-for-profit as a way of gaining work experience and explore the identity of their community through active interviews with residents. Community identity is a product of many things, including common regional values, assets, and vision for the future. The aim of HTT is to help students gain understanding of their hometowns and consider returning after graduation to contribute to the economy in their home region.</div>
        </div>
      </div>
      <div class="flex justify-center mb-10">
        <a href="https://ic2.utexas.edu/programs/home-to-texas/" target="_blank" rel="noreferrer" class="bg-blue-600 hover:bg-blue-800 cursor-pointer border border-blue-600 text-white text-xl text-center text-semibold rounded-full px-3 py-2">Visit the Home to Texas Website</a>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home to Texas',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A description of my part in the inaugural Summer of the Home to Texas program.'
      },
    ]
  }
}
</script>
