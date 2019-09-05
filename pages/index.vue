<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        llccing
      </h1>
      <h2 class="subtitle">
        made by <a href="/admin">lcf33123@foxmail.com</a> 
      </h2>
      <div class="links">

        <a href="/demo/timerDesc" class="button--green">blog</a>
        <a href="/demo" class="button--green">demo</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
