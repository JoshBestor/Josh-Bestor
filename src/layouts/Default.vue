<template>
  <div>
    <header>
    <!--Header-->
      <section class="pb-6 flex justify-center bg-orange-200 justify-between border-b border-blue-600">
        <div>
            <a href="/" class="font-serif text-blue-600 text-3xl inline-block pt-2 pl-2 hover:text-blue-800">Josh Bestor</a>
        </div>
        <div class="text-right text-gray-900 flex justify-right text-2xl pt-3">
          <a href="/projects" class="mx-2 text-right inline-block pr-1 hover:text-gray-600 cursor-pointer">Projects</a>            
          <a href="/contact" class="mx-2 text-right inline-block pr-1 hover:text-gray-600 cursor-pointer">Contact Me</a>
        </div>
      </section>
    </header>
    <main class="container mx-auto">
    <slot/>
    </main>
    <!--Footer-->
        <div class="w-full bg-orange-200 text-gray-900 flex sm:flex-col lg:flex-row justify-center justify-between border-t border-blue-600">
            <a href="/" class="block text-blue-600 font-serif text-center text-xl py-3 hover:text-blue-800">Josh Bestor</a>
            <div class="block text-center pb-2 lg:order-first mt-4 lg:w-1/3">Designing mediocre at best websites since yesterday</div>
            <div class="block text-center pb-6 mt-4 lg:w-1/3">
              <a class="text-blue-600 underline" href="/contact">Contact</a> me through email or <a class="text-blue-600 underline" href="https://www.linkedin.com/in/joshua-bestor/">LinkedIn</a>
            </div>
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
