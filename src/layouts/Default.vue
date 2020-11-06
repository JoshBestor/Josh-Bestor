<template>
  <div class="min-h-screen items-stretch flex flex-col antialiased">
    <header aria-label="Header">
    <!--Header-->
      <section class="flex justify-center bg-orange-200 justify-between border-b border-blue-600 px-2">
        <div class="pt-4 hidden sm:block">
          <a href="/"><img class="h-8 cursor-pointer" src="https://i.imgur.com/ttoVbsW.png?1" alt="A binary circle logo"></a>
        </div>
        <div class="hidden sm:block">
          <a href="/"><img class="h-24 cursor-pointer" src="https://i.imgur.com/CTiMYh7.png?1" alt="A binary circle logo"></a>
        </div>
        <div class="sm:hidden">
          <a href="/"><img class="h-32 cursor-pointer" src="https://i.imgur.com/CTiMYh7.png?1" alt="A binary circle logo"></a>
        </div>
        <div class="text-right text-gray-900 flex flex-col justify-right text-2xl pt-2">
          <a href="/contact" class="mx-2 text-right inline-block pr-1 hover:text-gray-600 cursor-pointer">Contact Me</a>
          <a href="/projects" class="mx-2 text-right inline-block pr-1 hover:text-gray-600 cursor-pointer">Projects</a>            
        </div>
      </section>
    </header>
    <main aria-label="Main" class="container mx-auto flex-1">
      <slot/>
    </main>
    <!--Footer-->
    <footer aria-label="Footer">
      <div class="w-full bg-orange-200 text-gray-900 flex flex-col md:flex-row justify-center justify-between border-t border-blue-600">
        <a href="/" class="flex justify-center"><img class="h-20" src="https://i.imgur.com/EQfkhu9.png?1" alt="A binary circle logo"></a>
        <div class="block text-center pb-2 md:order-first mt-4 md:w-1/3">Frontend development is not my strong suit</div>
        <div class="block text-center pb-6 mt-4 md:w-1/3">
          <a class="text-blue-600 hover:text-blue-300" href="/contact">Contact</a> me through email or <a class="text-blue-600 hover:text-blue-300" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-bestor/">LinkedIn</a>
        </div>
      </div>
      <div class="text-center text-gray-900 w-full bg-orange-200 text-xs py-4">Copyright © 2019 Joshua Bestor. All Rights Reserved.</div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
