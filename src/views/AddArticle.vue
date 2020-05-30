<template>
  <ArticleForm @form-submit="addArticle"/>
</template>

<script>
import ArticleForm from '@/components/ArticleForm'
import { postArticle } from '@/services/articlesService'

export default {
  components: {
    ArticleForm
  },
  methods: {
    async addArticle({title, description, markdown}) {
      const newArticle = {
        title,
        description,
        markdown
      }
      await postArticle(newArticle)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>