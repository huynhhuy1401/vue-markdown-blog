<template>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <p class="navbar-item title">
            <router-link class="has-text-dark" exact to="/">Markdown Blog</router-link>
          </p>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <div v-if="isNotInEditOrNewArticleRoute" class="navbar-item">
              <router-link
                :to="{name: 'new-article'}"
                class="button is-primary has-text-weight-bold"
              >New Article</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  computed: {
    isNotInEditOrNewArticleRoute() {
      return (
        this.$route.name !== "new-article" &&
        this.$route.name !== "edit-article"
      )
    }
  }
}
</script>

<style>
</style>