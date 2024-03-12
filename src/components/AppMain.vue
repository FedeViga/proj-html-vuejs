<script>
import AppJumbo from './AppJumbo.vue'
import AppNewMovies from './AppNewMovies.vue'
import AppMoviePlaylist from './AppMoviePlaylist.vue'
import AppComing from './AppComing.vue'
import AppMoviesList from './AppMoviesList.vue'

export default {
    name: 'AppMain',

    components: {
        AppJumbo,
        AppNewMovies,
        AppMoviePlaylist,
        AppComing,
        AppMoviesList
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
    </main>
</template>

<style lang="scss">


</style>