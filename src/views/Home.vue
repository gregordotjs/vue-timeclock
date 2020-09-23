<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{$store.state.count}}
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
