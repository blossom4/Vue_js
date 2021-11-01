<template>
  <header>
    <div class="nav nav-pills">
      <div v-for="nav in navItems" class="nav-item" :key="nav.name">
        <router-link :to="nav.href" class="nav-link fs-5" active-class="active">
          {{ nav.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      navItems: [
        {
          name: 'Home',
          href: '/home',
        },
        {
          name: 'Movie',
          href: '/movie',
        },
        {
          name: 'About',
          href: '/about',
        },
        {
          name: 'TodoList',
          href: '/todolist',
        },
        {
          name: 'Lunch',
          href: '/lunch',
        },
        {
          name: 'Lotto',
          href: '/lotto',
        },
        {
          name: 'Youtube',
          href: '/youtube',
        },
      ]
    }
  }
}
</script>

<style>
.nav-pills .nav-link.active {
  background-color: #42b983;
}
</style>