<template>
  <Layout class="">
    <section class="text-gray-900 mx-4 my-6 px-6">
        <h1 class="text-center text-5xl mb-8">Plagiarism Detection Software</h1>
        <projectAbout>
          <p class="">
            This is the final project for the Software Design and Implementation I class that I took during the Spring of 2019. In the class, I advanced my understanding of C programming and discovered C++ and Object Oriented Programming. The program runs on Linux servers. To use it, compile the file and type ./plagiarismCatcher 'path/to/files' 'x' 'y'. The path to files is how to reach the files that you want to test for plagiarism. The variable 'x' is how many words you want per phrase of text to test and the variable 'y' is the minimum amount of collisions that you concider plagiarism.
          </p>
          <br>
          <p>
            The plagiarism catcher uses a hashtable of linked lists to store the file name where the phrases came from. Whenever there are two phrases that are the same, there will be both file names in the same location in the hashtable. Once this has been done, the software counts how many collisions each file has with every other file in the set and returns the files that have more than the specified ammount. 
          </p>
        </projectAbout>
        <gitHubLink link="https://github.com/JoshBestor/Project_8_Cheaters">Content is under plagiarismCatcher.cpp</gitHubLink>
    </section>
  </Layout>
</template>

<script>
import projectAbout from '~/components/Project_About.vue'
import gitHubLink from '~/components/GitHub_Link.vue'

export default {
  metaInfo: {
    title: 'Projects',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'A description of the website that you are currently on.'
      },
    ]
  },

  components: {
    projectAbout,
    gitHubLink
  }
}
</script>
