<script>
import MovieItem from './MovieItem.vue'

export default {
    name: 'AppMoviesList',

    components: {
        MovieItem
    }
}
</script>

<template>
    <section>
            <div class="container">

                <div class="title">
                    <h2>
                        New Movie
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi sed, cumque saepe tempora recusandae! Aspernatur qui aliquam perspiciatis dignissimos tenetur vero odit minima quidem amet voluptates velit, dolorem quasi?
                    </p>
                </div>
                <div class="movies-list">

                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>
                    <MovieItem></MovieItem>

                </div>
            </div>
        </section>
</template>

<style lang="scss">

@use '../styles/variables' as *;

section:nth-of-type(3) {

    .movies-list {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
        
        .card {
            width: calc(100% / 3 - 20px / 3 * 2);
        }
    }
}

</style>