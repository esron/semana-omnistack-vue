<template>
  <li class="dev-item">
    <header>
      <img
        :src=dev.avatar_url
        :alt=dev.name
      />
      <div class="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(', ')}</span>
      </div>
    </header>
    <p>{dev.bio}</p>
    <a href="`http://github.com/${dev.github_username}`">Acessar perfil no Github</a>
  </li>
</template>

<script>
export default {
  props: {
    dev: () => {},
  },
  name: 'DevItem',
}
</script>
