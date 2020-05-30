<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="title" class="input" type="text" placeholder="Title" />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input v-model="description" class="input" type="text" placeholder="Description" />
        </div>
      </div>
      <div class="field">
        <label class="label">Markdown</label>
        <div class="control">
          <textarea v-model="markdown" class="textarea is-medium" placeholder="Markdown"></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      markdown: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('form-submit', {
        title: this.title,
        description: this.description,
        markdown: this.markdown
      })
    }
  }
}
</script>

<style>
</style>