<script>
export default {
    name: 'MovieItem',
}
</script>

<template>
    <div class="card">
        <img src="/img/1-2.jpg" alt="">
        <div class="rating">
            <i class="fa-solid fa-star"></i> 3/10
        </div>
        <div class="description">

            <h2>
                Movie 1
            </h2>
            <h3>
                Category: 
            </h3>
        </div>

        <div class="info">
            <div class="details">
                Details
            </div>
            <div class="views">
                381 views
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

    img {
        width: 100%;
        border-radius: 20px;
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

    .description {
        position: absolute;
        bottom: 100px;
        left: 0;
        padding: 0px 20px;
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