<template>
  <transition name="fade">
    <div class="columns">
      <div class="column is-half">
        <div class="card blog-article is-shadowless">
          <div class="card-content">
            <div class="content">
              <p class="title">{{ article.title }}</p>
              <div class="content">{{ article.description }}</div>
              <small class="has-text-grey is-small">Created at: {{ createdDate }}</small>
            </div>
          </div>
          <footer class="card-footer">
            <router-link :to="{name: 'article-detail', params: { id: article._id}}" class="card-footer-item has-text-link">
              <span class="icon">
                <i class="fas fa-eye"></i>
              </span> View more
            </router-link>
            <router-link :to="{name: 'article-edit', params: { id: article._id}}" class="card-footer-item has-text-link">
              <span class="icon">
                <i class="fas fa-edit"></i>
              </span> Edit
            </router-link>
            <a class="card-footer-item has-text-danger is-loading" @click="onDelete">
              <span class="icon">
                <i class="fas fa-trash"></i>
              </span> Delete
            </a>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { deleteArticle } from "@/services/articlesService"

export default {
  props: ["article"],
  computed: {
    createdDate() {
      return this.article.createdAt.split(":")[0].split("T")[0]
    }
  },
  methods: {
    async onDelete() {
      try {
        await deleteArticle(this.article._id)
        this.$emit("deleted")
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>

<style>
.blog-article {
  margin-bottom: 1rem;
  border: 1px solid hsl(0, 0%, 86%);
  border-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>