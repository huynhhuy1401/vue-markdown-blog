<template>
  <EditForm @form-submit="updateCurrentArticle" :preData="{ title, description, markdown }"/>
</template>

<script>
import EditForm from "@/components/EditForm"
import { getArticle, updateArticle } from '@/services/articlesService'

export default {
  props: ['id'],
  data() {
    return {
      title: '',
      description: '',
      markdown: ''
    }
  },
  components: {
    EditForm
  },
  methods: {
    async updateCurrentArticle(newData) {
      await updateArticle(this.id, newData)
      this.$router.push('/')
    }
  },
  async created() {
    try {
      const dataReq = await getArticle(this.id)
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