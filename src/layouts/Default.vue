<template>
  <div>
    <header>
    <!--Header-->
      <section class="pb-6 flex justify-center bg-orange-200 justify-between">
        <div>
            <a href="/" class="font-serif text-blue-600 text-3xl inline-block pt-2 pl-2 hover:text-blue-700">Josh Bestor</a>
        </div>
        <div class="text-right text-gray-900 flex justify-right text-2xl pt-3">
          <a href="/other" class="mx-2 text-right inline-block pr-1 hover:text-gray-700 cursor-pointer">Other</a>            
          <a href="/contact" class="mx-2 text-right inline-block pr-1 hover:text-gray-700 cursor-pointer">Contact Me</a>
        </div>
      </section>
    </header>
    <main class="container mx-auto">
    <slot/>
    </main>
    <!--Footer-->
        <div class="w-full bg-orange-200 text-gray-900 flex sm:flex-col lg:flex-row justify-center justify-between">
            <a href="/" class="block text-blue-600 font-serif text-center text-xl py-3 hover:text-blue-700">Josh Bestor</a>
            <div class="block text-center pb-2 lg:order-first mt-4 lg:w-1/3">Designing mediocre at best websites since yesterday</div>
            <div class="block text-center pb-6 mt-4 lg:w-1/3">Instagram and Snapchat: @bestorthanu</div>
        </div>
        <div class="text-center text-gray-900 w-full bg-orange-200 text-xs py-4">Copyright © 2019 Joshua Bestor. All Rights Reserved.</div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
