<template>
  <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <dev-form @submit=handleAddDev />
    </aside>
    <main>
      <ul>
        <dev-item
          v-for="dev of devs"
          :dev=dev
          :key=dev.github_username
        />
      </ul>
    </main>
  </div>
</template>

<script>
import DevForm from './components/DevForm'
import DevItem from './components/DevItem'
import api from './services/api.js'

export default {
  name: 'App',

  components: {
    DevForm,
    DevItem,
  },

  data() {
    return {
      devs: [],
    }
  },

  mounted() {
    this.$nextTick(async () => {
      const response = await api.get('/devs')

      this.devs = response.data
    })
  },

  methods: {
    async handleAddDev(data) {
      const response = await api.post('/devs', data)

      this.devs = [...this.devs, response.data]
    }
  }
}
</script>

<style>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

#app main {
  margin-left: 30px;
}

@media (max-width: 1000px) {
  #app {
    flex-direction: column;
  }

  #app main {
    margin-left: 0;
    margin-top: 30px;
  }

  #app aside {
    width: 100%;
  }
}

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #rood {
  height: 100%;
}

body {
  background-color: #E5E6F0;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: Roboto, sans-serif;
}

aside {
  width: 320px;
  background: #FFF;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
}

aside strong {
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
}

main {
  flex: 1;
}

main ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
}

@media(max-width: 650px) {
  main ul {
    grid-template-columns: 1fr;
  }
}
</style>
