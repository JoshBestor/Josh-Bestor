<template>
  <Layout class="bg-blue-200">
    <section class="text-white bg-orange-600 mx-4 mt-6 px-6 pb-4">
      <div class="text-center text-xl">Contact Me</div>
      <ul class=" list-disc text-gray-900">
        <li class="bg-blue-100 shadow rounded p-2">
          <h3 class="text-lg">Phone</h3>
          <p>830-777-3983</p>
        </li>
        <li class="bg-blue-100 shadow rounded p-2 mt-2">
          <h3 class="text-lg">Email</h3>
          <p>joshbestor@gmail.com</p>
        </li>
        <li class="bg-blue-100 shadow rounded p-2 mt-2">
          <h3 class="text-lg">GitHub</h3>
          <a href="https://github.com/JoshBestor">https://github.com/JoshBestor</a>
        </li>      
      </ul>
    </section>
  </Layout>
</template>

<script>
import Layout from '~/layouts/JHHE.vue'

export default {
  components: {
    Layout
  },

  metaInfo: {
    title: 'About us'
  }
}
</script>
