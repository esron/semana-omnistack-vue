<template>
  <form @submit.prevent=handleSubmit>
    <div class="input-block">
      <label for="github_username">Usuário do Github</label>
      <input
        v-model=github_username
        type="text"
        name="github_username"
        id="github_username"
        required
      />
    </div>

    <div class="input-block">
      <label for="techs">Tecnologias</label>
      <input
        v-model=techs
        type="text"
        name="techs"
        id="techs"
        required
      />
    </div>

    <div class="input-group">
      <div class="input-block">
        <label for="latitude">Latitude</label>
        <input
          v-model=latitude
          type="number"
          name="latitude"
          id="latitude"
          step="any"
          required
        />
      </div>

      <div class="input-block">
        <label for="latitude">Longitude</label>
        <input
          v-model=longitude
          type="number"
          name="latitude"
          id="latitude"
          step="any"
          required
        />
      </div>
    </div>

    <button type="submit">Salvar</button>
  </form>
</template>

<script>
export default {
  name: 'DevForm',
  data() {
    return {
      github_username: '',
      techs: '',
      latitude: 0.0,
      longitude: 0.0,
    }
  },

  mounted() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        this.latitude = latitude
        this.longitude = longitude
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', {
        github_username: this.github_username,
        techs: this.techs,
        latitude: this.latitude,
        longitude: this.longitude,
      })

      this.github_username = ''
      this.techs = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  margin-top: 30px;
}

form .input-block + .input-block {
  margin-top: 20px;
}

form .input-group {
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}

form .input-group .input-block {
  margin-top: 0;
}

form .input-block label {
  color: #ACACAC;
  font-size: 14px;
  font-weight: bold;
  display: block;
}

form .input-block input {
  width: 100%;
  height: 32px;
  color: #666;
  border: 0;
  border-radius: 1px solid #EEE;
}

form button[type=submit] {
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40E7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  cursor: pointer;
  transition: background 0.5s;
}

form button[type=submit]:hover {
  background: #6931CA;
}
</style>
