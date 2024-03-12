<script>
import AppJumbo from './AppJumbo.vue'
import AppNewMovies from './AppNewMovies.vue'
import AppMoviePlaylist from './AppMoviePlaylist.vue'
import AppComing from './AppComing.vue'

export default {
    name: 'AppMain',

    components: {
        AppJumbo,
        AppNewMovies,
        AppMoviePlaylist,
        AppComing
    }
}
</script>

<template>
    <main>
        <AppJumbo></AppJumbo>
        <AppNewMovies></AppNewMovies>
        <AppMoviePlaylist></AppMoviePlaylist>
        <AppComing></AppComing>
    </main>
</template>

<style lang="scss">


</style>