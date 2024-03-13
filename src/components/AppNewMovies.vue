<script>
import MovieItem from './MovieItem.vue';
import { store } from '../store';

export default {
    name: 'AppNewMovies',

    components: {
        MovieItem
    },

    data() {
        return {
            store,
        }
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
                <div class="slider">
                    <MovieItem 
                        v-for="currentMovie in store.moviesList"
                        :movie="currentMovie"
                    ></MovieItem>
                </div>
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

.content {
    overflow: hidden;
    white-space: nowrap;
    
}

.slider {
    display: inline-block;
    animation: 30s slide infinite ease;

}

@keyframes slide {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}

</style>