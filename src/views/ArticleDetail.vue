<template>
  <div class="container">
    <div class="content">
      <h2 class="title is-2">{{ title }}</h2>
      <h5 class="subtitle is-5">{{ description }} </h5>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/services/articlesService'
import marked from 'marked'
import DOMPurify from 'dompurify'

export default {
  props: ['id'],
  data() {
    return {
      title: '',
      description: '',
      markdown: ''
    }
  },
  computed: {
    compiledMarkdown() {
      return DOMPurify.sanitize(marked(this.markdown))
    }
  },
  async created() {
    try {
      const dataReq = await getArticle(this.id)
      console.log(dataReq)
      const article = dataReq.data
      this.title = article.title
      this.description = article.description
      this.markdown = article.markdown
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style>

</style>
