<template>
  <form>
    <div>
      <label for="github_username">Usuário do Github</label>
      <input
        type="text"
        id="github_username"
        required
      />
    </div>

    <div>
      <label for="github_username">Tecnologias</label>
      <input
        type="text"
        id="github_username"
        required
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
