<!--This is used in ~/JHHE/index in the flex about rappers I like.-->
<template>
    <label class="p-1 bg-orange-600 text-white rounded m-4 text-center">
        <span class="text-lg underline">{{ name }}</span>
        <div>
            <div>Notable Albums:</div>
            <div class="flex flex-col">
            <div>{{ album_1 }}</div>
            <div>{{ album_2 }}</div>
            </div>
        </div> 
    </label>
</template>

<script>
export default {
  name: 'Artist',

  props: [
      'name',
      'album_1',
      'album_2'
  ]
}
</script>