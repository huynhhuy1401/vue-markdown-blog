<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="preData.title" class="input" type="text" placeholder="Title" />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input v-model="preData.description" class="input" type="text" placeholder="Description" />
        </div>
      </div>
      <div class="field">
        <label class="label">Markdown</label>
        <div class="control">
          <textarea v-model="preData.markdown" class="textarea is-medium" placeholder="Markdown"></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button @click="$router.push('/')" class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  props: ['preData'],
  methods: {
    onSubmit() {
      this.$emit('form-submit', {
        title: this.preData.title,
        description: this.preData.description,
        markdown: this.preData.markdown
      })
    }
  }
}
</script>

<style>
</style>