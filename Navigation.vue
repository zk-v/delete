<template>
  <div class="bg-blue-400 p-2">
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/" class="mx-3">Home</router-link>
    <router-link to="/about" class="mx-3">About</router-link>
  </div>
</template>

<script>
export default {};
</script>
