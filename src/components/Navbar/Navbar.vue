<template>
  <container>
    <content>
      <img src="https://assets.zenvia.com/images/navbar/logo-zenvia-desktop.png" alt="brand image" />
      <button type="button" >EXAMPLE</button>
      <ul>
        <li>ITEM1</li>
        <li>ITEM2</li>
        <li>ITEM3</li>
      </ul>
    </content>
  </container>
  
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import {Container, Content} from './styles'

export default defineComponent({
  name: 'Navbar',
  components:{
    'container':Container,
    'content': Content
  },
  setup() {
    
  },
})
</script>
