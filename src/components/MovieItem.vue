<script>
export default {
    name: 'MovieItem',

    props: {
        movie: Object,
    }
}
</script>

<template>
    <div class="card">
        <img :src="movie.posterImage">
        <div class="rating">
            <i class="fa-solid fa-star"></i>
            {{ movie.rating }}
        </div>
        <div class="lenght">
            {{ movie.lenght }}
        </div>
        <div class="description">

            <h2>
                {{ movie.title }}
            </h2>
            <h3>
                Category: {{ movie.category }}
            </h3>
            <h4>
                Release : {{ movie.release }}
            </h4>
            <h4>
                Genres : {{ movie.genres }}
            </h4>
        </div>

        <div class="info">
            <div class="details">
                Details
            </div>
            <div class="views">
                {{ movie.views }} views
            </div>
        </div>
    </div>
</template>

<style lang="scss">

@use '../styles/variables' as *;

.card {
    position: relative;
    display: inline-block;
    width: calc(100% / 3);
    background-color: black;
    border-radius: 20px;
    overflow: hidden;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .5;
    }

    .rating {
        position: absolute;
        top: 30px;
        right: 0;
        padding-right: 20px;

        .fa-star {
            color: $primary;
        }
    }

    .lenght {
        display: none;
        position: absolute;
        top: 30px;
        left: 0;
        padding: 5px 10px;
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
        background-color: $primary;
    }

    .description {
        position: absolute;
        bottom: 100px;
        left: 0;
        padding: 0px 20px;

        h4 {
            display: none;
        }
    }

    .info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        bottom: 40px;
        right: 0;

        & * {
            background-color: $primary-bg;
            padding: 5px 10px;
        }

        .details {
            border-top-right-radius: 17px;
            border-bottom-right-radius: 17px;
        }

        .views {
            border-top-left-radius: 17px;
            border-bottom-left-radius: 17px;
        }
    }
}

</style>