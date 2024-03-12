<script>
import NewsItem from './NewsItem.vue'

export default {
    name: 'AppMoviesList',

    components: {
        NewsItem
    }
}
</script>

<template>
    <section>
            <div class="container">

                <div class="title">
                    <h2>
                        Latest News
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi sed, cumque saepe tempora recusandae! Aspernatur qui aliquam perspiciatis dignissimos tenetur vero odit minima quidem amet voluptates velit, dolorem quasi?
                    </p>
                </div>

                <div class="news-list">
                    <div class="big">
                        <NewsItem></NewsItem>
                    </div>
                    <div class="small">
                        <NewsItem></NewsItem>
                        <NewsItem></NewsItem>
                        <NewsItem></NewsItem>
                        <NewsItem></NewsItem>
                    </div>
                </div>
            </div>
        </section>
</template>

<style lang="scss">

@use '../styles/variables' as *;

section:nth-of-type(4) {
    .news-list {
        display: flex;
        gap: 20px;

        .big {
            width: calc(50% - 10px);

            .news {
                width: 100%;
            }
        }

        .small {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            width: calc(50% - 10px);

            .news {
                width: calc(50% - 20px / 2);

                img {
                    width: 100%;
                }
            }
        }
    }
}

</style>