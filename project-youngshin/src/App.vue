<template>
  <div id="app">
    <div id="nav" class="mb-5 d-flex">
      <a href="/" class="text-decoration-none fs-3 me-5" id="mainLogo">YS.PROJECT</a>
      <Header/>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
} */

body {
  font-family: 'GowunDodum-Regular';
}

#mainLogo:hover {
  color: #42b983;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.active {
  color: white;
}

.btnG {
  background-color: #42b983;
  border-color: #42b983;
  color: white;
}

.logoImage {
  width: 32px;
  height: 32px;
}

.myContainer {
  margin-left: 5vw;
  margin-right: 5vw;
}
</style>
