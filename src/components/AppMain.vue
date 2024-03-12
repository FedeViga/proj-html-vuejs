<script>
import AppJumbo from './AppJumbo.vue'
import AppNewMovies from './AppNewMovies.vue'

export default {
    name: 'AppMain',

    components: {
        AppJumbo,
        AppNewMovies
    }
}
</script>

<template>
    <main>
        <AppJumbo></AppJumbo>
        <AppNewMovies></AppNewMovies>
    </main>
</template>

<style lang="scss">


</style>