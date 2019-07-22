<!--This is used in ~/ in the flex about me.-->
<template>
    <div class="bg-white border border-blue-600 p-2 mb-4 rounded-lg">
        <div class="flex justify-center">
            <h2 class="text-2xl px-2">{{ title }}</h2>
        </div>
        <div class="p-2 flex justify-center">
            <img :src="image" :alt="alternate" class="inline-block shadow-md border border-blue-600">
        </div>
        <div class="bg-white rounded-lg"><slot></slot></div>
    </div>
</template>

<script>
export default {
  name: 'aboutMe',

  props: [
      'title',
      'image',
      'alternate'
  ]
}
</script>