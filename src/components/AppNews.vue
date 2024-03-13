<script>
import NewsItem from './NewsItem.vue'
import { store } from '../store';

export default {
    name: 'AppMoviesList',

    components: {
        NewsItem
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
                        Latest News
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi sed, cumque saepe tempora recusandae! Aspernatur qui aliquam perspiciatis dignissimos tenetur vero odit minima quidem amet voluptates velit, dolorem quasi?
                    </p>
                </div>

                <div class="news-list">
                    <div class="big">
                        <NewsItem :news="store.newsList[0]"></NewsItem>
                    </div>
                    <div class="small">
                        <NewsItem :news="store.newsList[1]"></NewsItem>
                        <NewsItem :news="store.newsList[2]"></NewsItem>
                        <NewsItem :news="store.newsList[3]"></NewsItem>
                        <NewsItem :news="store.newsList[4]"></NewsItem>
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
                height: 100%;
            }
        }

        .small {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            width: calc(50% - 10px);

            .news {
                width: calc(50% - 20px / 2);
            }
        }

        .news:hover {
            background: linear-gradient($primary, black);
            cursor: pointer;
        }

        .news:hover .date {
            display: block;
        }
    }
}

</style>