<template>
  <ButtonContainer primary>

    <h1>teste</h1>
  </ButtonContainer>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonContainer } from './styles';

export default defineComponent({
  name:'Button',
  components:{
    ButtonContainer
  }
 
})
</script>