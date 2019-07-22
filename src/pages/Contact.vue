<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <div class="text-center text-5xl mb-8">Contact</div>
        <div class="bg-orange-200 p-6 sm:p-8 border border-blue-600 mb-20">
          <ul class="flex flex-col text-xl list-disc bg-white px-4 border border-blue-600 rounded-lg">
              <li class="m-4">Email: <br class="sm:hidden">joshbestor@utexas.edu</li>
              <li class="m-4">Phone: <br class="sm:hidden">830-777-3983</li>
              <li class="m-4">Snapchat: <br class="sm:hidden">@bestorthanu</li>
              <li class="m-4">LinkedIn: <br class="sm:hidden"><a target="_blank" href="https://www.linkedin.com/in/joshua-bestor/" class="text-blue-600 hover:text-blue-800">Joshua Bestor</a></li>
              <li class="m-4">GitHub: <br class="sm:hidden"><a target="_blank" href="https://github.com/JoshBestor/" class="text-blue-600 hover:text-blue-800">JoshBestor</a></li>
          </ul>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Every possible way to contact me.'
      },
    ]
  }
}
</script>
