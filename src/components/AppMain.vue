<script>
import AppJumbo from './AppJumbo.vue'
import AppNewMovies from './AppNewMovies.vue'
import AppMoviePlaylist from './AppMoviePlaylist.vue'
import AppComing from './AppComing.vue'
import AppMoviesList from './AppMoviesList.vue'
import AppNews from './AppNews.vue'
import AppForm from './AppForm.vue'

export default {
    name: 'AppMain',

    components: {
        AppJumbo,
        AppNewMovies,
        AppMoviePlaylist,
        AppComing,
        AppMoviesList,
        AppNews,
        AppForm
    }
}
</script>

<template>
    <main>
        <AppJumbo></AppJumbo>
        <AppNewMovies></AppNewMovies>
        <AppMoviePlaylist></AppMoviePlaylist>
        <AppComing></AppComing>
        <AppMoviesList></AppMoviesList>
        <AppNews></AppNews>
        <AppForm></AppForm>
    </main>
</template>

<style lang="scss">


</style>