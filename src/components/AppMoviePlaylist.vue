<script>
import { store } from '../store';

export default {
    name: 'AppMoviePlaylist',

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
                    Movie Playlist
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi sed, cumque saepe tempora recusandae! Aspernatur qui aliquam perspiciatis dignissimos tenetur vero odit minima quidem amet voluptates velit, dolorem quasi?
                </p>
            </div>

            <div class="content">
                <div class="video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                </div>
                <div class="playlist">
                    <div class="playlist-title">
                        <h3>
                            New Movie
                        </h3>
                        <p>
                            Playing 24
                        </p>
                    </div>
                    <div class="movies-list">
                        <div v-for="currentMovie in store.moviesList" class="movie">
                            <img :src="currentMovie.posterImage" alt="">
                            <div class="info">
                                <h4>
                                    {{ currentMovie.title }}
                                </h4>
                                <p>
                                    {{ currentMovie.views }} views
                                </p>
                                <p>
                                    {{ currentMovie.release }}
                                </p>
                                <p>
                                    {{ currentMovie.lenght }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

@use '../styles/variables' as *;

section:nth-of-type(2) {

    margin-bottom: 100px;

    .content {
    
        display: flex;
        gap: 50px;
    
        .video {
            height: 560px;
            background-color: black;
            width: 730px;

            iframe {
                border: 0;
            }
        }
    
        .playlist {
            flex-grow: 1;
            background-color: $secondary;
            height: 560px;

            .playlist-title {
                padding: 20px;
                border-bottom: 1px solid $primary-bg;
            }

            .movies-list {
                overflow: auto;
                height: calc(100% - 93px);

                .movie {
                    display: flex;
                    padding: 10px;

                    img {
                        width: 100px;
                        height: 100px;
                        object-fit: cover;
                    }
                    .info {
                        padding: 0px 10px;
                    }

                    &:hover {
                        background-color: $primary-bg;
                        cursor: pointer;
                    }
                }

            }
        }
    }
}






</style>