<template>
  <div class="albums" id="albums">
    <h1>Albums De Photos</h1>
    <h2>
      * Click The Album If You Want To See The Photos
    </h2>
    <div class="album-table">
      <div v-for="album in paginatedAlbums" :key="album.id" class="album-row">
        <router-link :to="'/albums/' + album.id">{{ album.title }}</router-link>
      </div>
    </div>
    <div class="pagination">
      <button 
        class="page-number" 
        v-for="page in totalPages" 
        :key="page" 
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useAlbumsStore } from '../store/album';

export default defineComponent({
  setup() {
    const albums = ref([]);
    const albumsStore = useAlbumsStore();
    const currentPage = ref(1);
    const itemsPerPage = ref(6);

    const totalPages = computed(() => {
      return Math.ceil(albums.value.length / itemsPerPage.value);
    });

    const paginatedAlbums = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return albums.value.slice(start, end);
    });

    const changePage = (page) => {
      currentPage.value = page;
    };

    onMounted(async () => {
      await albumsStore.fetchAlbums();
      albums.value = albumsStore.albums;
    });

    return {
      albums,
      paginatedAlbums,
      totalPages,
      currentPage,
      changePage
    };
  },
});
</script>

<style scoped>
.albums {
  max-width: 75%;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  color: #000;
  font-size: 20px;
  background-size: cover;
  margin-top: -20px;
}

h1 {
  font-size: 40px;
  color: whitesmoke;
  font-weight: bold;
  border-bottom: 1px solid whitesmoke;
}

h2 {
  margin-top: -5px;
  margin-bottom: -2px;
  font-size: 16px;
  color: wheat;
  font-weight: bold;
}

.album-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.album-row {
  display: flex;
  text-align: left;
  padding: 15px;
  border: 1px solid whitesmoke;
  background-color: transparent;
  min-height: 50px;
  transition: background-color 0.3s, transform 0.3s;
}

.album-row a {
  text-decoration: none;
  color:  whitesmoke;
  font-size: 1.1rem;
}

.album-row:hover {
  font-weight: bold;
  border: 1px dotted whitesmoke;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-number {
  background: none;
  border: 1px solid whitesmoke;
  color: whitesmoke;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.page-number:hover {
  background-color: #000;
  color: whitesmoke;
}

.page-number.active {
  background-color: whitesmoke;
  color: black;
  border-color: black;
}
</style>
