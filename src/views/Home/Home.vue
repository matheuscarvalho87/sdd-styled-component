<template>
  <Container>
    <CustomButton />
    <h1>teste</h1>
  </Container>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container, CustomButton } from './styles';


export default defineComponent({
  name:'Home',
  components:{
    Container,
    CustomButton
}
 
})
</script>
