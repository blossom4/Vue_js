<template>
  <div id="app">
    <div id="nav" class="d-flex justify-content-center mb-5">
      <router-link :to="{ name: 'TodoList' }">TodoList</router-link>
      <p class="mx-1">|</p>
      <router-link :to="{ name: 'Lunch' }">Lunch</router-link>
      <p class="mx-1">|</p>
      <router-link :to="{ name: 'Lotto' }">Lotto</router-link>
      <p class="mx-1">|</p>
      <router-link :to="{ name: 'Youtube' }">Youtube</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

body {
  font-family: 'Pretendard-Regular';
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btnG {
  background-color: #42b983;
  border-color: #42b983;
  color: aliceblue;
}

.logoImage {
  width: 32px;
  height: 32px;
}
</style>
