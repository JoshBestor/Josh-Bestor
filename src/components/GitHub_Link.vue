<!--This is used in ~/projects/x as the link to the code on GitHub for each project.-->
<template>
    <div class="bg-orange-200 p-8 border border-blue-600 mb-10">
        <div class="flex justify-between flex-col md:flex-row bg-white border border-blue-600 rounded-lg p-2">
            <div class="content-center text-center md:text-left">You can find the code on GitHub<br><slot></slot></div>
            <a :href="link" class="bg-blue-600 hover:bg-blue-800 cursor-pointer border border-blue-600 text-white text-xl text-center text-semibold rounded-full px-2 py-1">Code Here</a>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'gitHubLink',

  props: [
      'link'
  ]
}
</script>