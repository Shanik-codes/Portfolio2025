<section id="contact">
    <h2>Contact</h2>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email">
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData);
    }
  }
}
</script>