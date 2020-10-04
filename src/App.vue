<template>
  <div>
    导航栏 | <router-link to="/">Ada</router-link> |
    <router-link to="/two">Ada2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
