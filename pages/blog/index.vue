<template>
  <div>
    <Navbar />

    <Photo />

    <List/>
  </div>
</template>
<script>
import Navbar from "./home/Navbar";
import Photo from "./home/Photo";
import List from './home/List'
export default {
  components: {
    Navbar,
    Photo,
    List
  }
};
</script>