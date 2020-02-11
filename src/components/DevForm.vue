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
      <label for="techs">Tecnologias</label>
      <input
        type="text"
        id="techs"
        required
      />
    </div>

    <div>
      <div>
        <label for="latitude">Latitude</label>
        <input
          type="number"
          id="latitude"
          required
        />
      </div>

      <div>
        <label for="latitude">Longitude</label>
        <input
          type="number"
          id="latitude"
          required
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
