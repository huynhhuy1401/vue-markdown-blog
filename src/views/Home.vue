<template>
  <div class="container">
    <Article @deleted="onDeleteArticle(index)" v-for="(article,index) in articles" :key="article._id" :article="article"/>
  </div>
</template>

<script>
import Article from "@/components/Article.vue"
import { getArticles } from '@/services/articlesService'

export default {
  name: "Home",
  data() {
    return {
      articles: []
    }
  },
  components: {
    Article
  },
  async created() {
    const articlesRequest = await getArticles()
    this.articles = articlesRequest.data
  },
  methods: {
    onDeleteArticle(index) {
      this.articles.splice(index, 1)
    }
  }
}
</script>
