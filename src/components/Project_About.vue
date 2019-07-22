<!--This is used in ~/projects/x as the about section of every project on their individual pages.-->
<template>
    <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
      <div class="bg-white border border-blue-600 p-2 rounded-lg">
        <h2 class="text-center text-2xl">About</h2>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'projectAbout'
}
</script>