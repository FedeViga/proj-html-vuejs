<script>
export default {
    name: 'NewsItem',

    props: {
        news: Object,
    }
}
</script>

<template>
    <div class="news">
        <img :src="news.image" alt="">
        <div class="date">
            {{ news.date }}
        </div>
        <div class="description">
            <h2>
                {{ news.title }}
            </h2>
        </div>

        <div class="info">
            <div class="details">
                Details
            </div>
            <div class="share">
                Share
            </div>
        </div>
    </div>
</template>

<style lang="scss">

@use '../styles/variables' as *;

.news {
    position: relative;
    display: inline-block;
    background-color: black;

    img {
        opacity: .5;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .date {
        display: none;
        position: absolute;
        top: 30px;
        right: 0;
        padding: 5px 10px;
        background-color: $primary;
        border-top-left-radius: 17px;
        border-bottom-left-radius: 17px;
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

        .share {
            border-top-left-radius: 17px;
            border-bottom-left-radius: 17px;
        }
    }
}

</style>