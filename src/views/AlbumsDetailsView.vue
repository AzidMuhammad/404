<template>
  <div class="album-detail" id="album-detail">
    <h1>{{ albumTitle }}</h1>
    <div class="photos-grid">
      <photo-card class="photo-tumb"
        v-for="(photo, index) in photos"
        :key="index"
        :img="photo.thumbnailUrl"
        :link="photo.url"
      ></photo-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAlbumsStore } from '../store/album';
import { usePhotosStore } from '../store/photo';
import PhotoCard from '../components/PhotoCard.vue';

export default defineComponent({
  components: {
    PhotoCard,
  },
  setup() {
    const route = useRoute();
    const albumTitle = ref('');
    const photos = ref([]);
    const albumsStore = useAlbumsStore();
    const photosStore = usePhotosStore();

    onMounted(async () => {
      const albumId = route.params.id;
      await photosStore.fetchPhotos(albumId);
      photos.value = photosStore.photos;
      albumTitle.value = albumsStore.albums.find(album => album.id == albumId)?.title;
    });

    return {
      albumTitle,
      photos,
    };
  },
});
</script>

<style scoped>
.album-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
  border: 1px solid whitesmoke;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.album-detail h1 {
  font-size: 2rem;
  color: #f0f0f0;
  margin-bottom: 20px;
  font-weight: bolder;
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.photos-grid .photo-tumb {
  border: 1px dotted whitesmoke;
}
</style>