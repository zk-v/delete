<template>
  <div id="app">
    <Navigation/>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./inc/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>


