<template>
  <q-layout view="hHh lpR fFf">
      <q-header elevated>
        <q-toolbar>
          <router-link to="/" exact-active-class="active" class="q-item" exact>
            <q-icon name="dashboard" class="q-lg-lg" />
          </router-link>          
          <router-link to="/todos" exact-active-class="active" class="q-item" exact>
            <q-icon name="add_circle_outline" class="q-lg-lg" />
          </router-link>
          <router-link to="/posts" exact-active-class="active" class="q-item" exact>
            <q-icon name="backup_table" class="q-lg-lg" />
          </router-link>
          <router-link to="/albums" exact-active-class="active" class="q-item" exact>
            <q-icon name="image_search" class="q-lg-lg" />
          </router-link>
        </q-toolbar>
      </q-header>
      
      <q-page-container>
        <q-page>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>
export default {
  name: 'App',  
};

</script>

<style scoped>

.q-header {
  background-color: #000000;
  color: whitesmoke;
  padding: 15px;
  font-size: 20px;
}

.row {
  display: flex;
  justify-content: center;
}

.items-center {
  align-items: center;
}

.q-item {
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
  padding-bottom: 5px;
}

.q-item.active {
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 2px;
}

@media (max-width: 768px) {
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0c0c0f;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Courier New', Courier, monospace;
    }

    .container {
      width: 300px;
    }
  
    input[type="text"] {
      width: calc(100% - 75px);
    }
  }
</style>
