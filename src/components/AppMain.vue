<script>
import AppJumbo from './AppJumbo.vue'
import AppNewMovies from './AppNewMovies.vue'
import AppMoviePlaylist from './AppMoviePlaylist.vue'

export default {
    name: 'AppMain',

    components: {
        AppJumbo,
        AppNewMovies,
        AppMoviePlaylist
    }
}
</script>

<template>
    <main>
        <AppJumbo></AppJumbo>
        <AppNewMovies></AppNewMovies>
        <AppMoviePlaylist></AppMoviePlaylist>
    </main>
</template>

<style lang="scss">


</style>