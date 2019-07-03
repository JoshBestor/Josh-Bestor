<template>
  <div class="layout">
     <!--Header-->
    <section class="pb-6 flex justify-center bg-orange-600 justify-between">
      <div class="text-right text-white inline-block pl-1 cursor-wait">Logo here</div>
      <h1 class="text-center text-white text-3xl inline-block font-bold pt-2">Josh's Hip Hop Emporium</h1>
      <div class="text-right text-white">
        <a class="text-right inline-block pr-1 hover:text-gray-700 cursor-pointer">Contact Me</a>
        <br>
        <a class="text-right inline-block pr-1 hover:text-gray-700 cursor-pointer">Other</a>
      </div>
    </section>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
