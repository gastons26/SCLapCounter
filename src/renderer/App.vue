<template>
  <div id="app">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link tag="a" class="navbar-item" to="/">Dashboard</router-link>
          <router-link tag="a" class="navbar-item" to="/races">Races</router-link>
          <router-link tag="a" class="navbar-item" to="/settings">Settings</router-link>
        </div>

        <div class="navbar-end">
          <router-link tag="a" class="navbar-item" to="/about">About</router-link>
          <div class="navbar-item">
            <div class="field is-grouped">
              <button class="button is-success">Active</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view class="container is-fluid"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'sc-lap-counter'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body { font-family: 'Source Sans Pro', sans-serif; }
</style>
