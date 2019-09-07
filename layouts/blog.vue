<template>
  <div>
    <Navbar />
    <Photo />
    
    <nuxt/>
  </div>
</template>
<script>
import Navbar from "../pages/blog/home/Navbar";
import Photo from "../pages/blog/home/Photo";
export default {
  components: {
    Navbar,
    Photo
  }
};
</script>