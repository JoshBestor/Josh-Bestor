<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">Contact</h1>
        <div class="bg-orange-200 p-6 sm:p-8 border border-blue-600 mb-20">
          <ul class="flex flex-col text-xl list-disc bg-white px-4 border border-blue-600 rounded-lg">
              <li class="m-4">Email: <br class="sm:hidden">joshbestor@utexas.edu</li>
              <li class="m-4">Phone: <br class="sm:hidden">830-777-3983</li>
              <li class="m-4">LinkedIn: <br class="sm:hidden"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-bestor/" class="text-blue-600 hover:text-blue-300">Joshua Bestor</a></li>
              <li class="m-4">GitHub: <br class="sm:hidden"><a target="_blank" rel="noreferrer" href="https://github.com/JoshBestor/" class="text-blue-600 hover:text-blue-300">JoshBestor</a></li>
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
