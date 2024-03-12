<script>
import MovieItem from './MovieItem.vue';

export default {
    name: 'AppNewMovies',

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

            <div class="content">

                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

@use '../styles/variables' as *;

.title {
    border-left: 2px solid $primary;
    border-bottom: 1px solid $secondary;
    padding: 0px 20px;

    p {
        margin-bottom: 10px;
    }
}

</style>