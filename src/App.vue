<script lang="ts">
import { defineComponent } from 'vue';
import {ThemeProvider } from 'vue3-styled-components';
import { GlobalStyle } from './styles/global';
import {defaultTheme} from './styles/theme/defaultTheme'
import Navbar from './components/Navbar/Navbar.vue'
  
  export default defineComponent({
    name:'app',
    components:{
    GlobalStyle,
    ThemeProvider,
    Navbar
},
    setup(){
      return {defaultTheme}
    }
  })
</script>

<template>
  <ThemeProvider :theme="defaultTheme">  
    <Navbar />
    <router-view />
    <GlobalStyle />
  </ThemeProvider>
</template>


