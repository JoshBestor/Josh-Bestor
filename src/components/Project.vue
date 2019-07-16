<!--This is used in ~/projects in the flex about the various projects.-->
<template>
    <a :href="uri" class="border border-blue-600 rounded-lg bg-white p-2 lg:w-1/4 mb-4 lg:mx-4 hover:bg-blue-200">
        <div class="text-center text-xl">{{ title }}</div>
        <img class="border border-blue-600 shadow-md" :src="image" :alt="alternate">
        <div>{{ text }}</div>
    </a>
</template>

<script>
export default {
  name: 'Project',

  props: [
      'uri',
      'title',
      'image',
      'alternate',
      'text'
  ]
}
</script>