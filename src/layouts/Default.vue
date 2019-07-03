<template>
  <div>
    <header>
    <!--Header-->
      <section class="pb-6 flex justify-center bg-orange-600 justify-between">
        <div class="text-right text-white inline-block pl-1 cursor-wait">Logo here</div>
        <a href="/" class="text-center text-white text-3xl inline-block font-bold pt-2">Josh's Hip Hop Emporium</a>
        <div class="text-right text-white">
          <a class="text-right inline-block pr-1 hover:text-gray-700 cursor-pointer">Contact Me</a>
          <br>
          <a class="text-right inline-block pr-1 hover:text-gray-700 cursor-pointer">Other</a>
        </div>
      </section>
    </header>
    <main class="container mx-auto">
    <slot/>
    </main>
    <!--Footer-->
      <div class="w-full bg-orange-600 text-white flex sm:flex-col lg:flex-row justify-center">
        <div class="block">
            <h3 class="text-center text-xl py-3">Josh's Hip Hop Emporium</h3>
            <div class="text-center pb-6 cursor-wait">Logo here</div>
        </div>   
        <div class="block text-center pb-2 lg:order-first mt-4 lg:w-1/3">Designing mediocre at best websites since yesterday</div>
        <div class="block text-center pb-6 mt-4 lg:w-1/3">Instagram and Snapchat: @bestorthanu</div>
      </div>
      <div class="text-center text-white w-full bg-orange-600 text-xs py-4">Copyright © 2019 Joshua Bestor. All Rights Reserved.</div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
