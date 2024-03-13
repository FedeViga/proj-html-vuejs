<script>
import { store } from '../store';
import NewsItem from './NewsItem.vue';

export default {
    name: 'AppFooter',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer>
        <div id="footer-top">

            <div class="container">

                <div v-for="currentlist in store.footerLinks" class="footer-links">
                    <h3 class="links-title">
                        {{ currentlist.title }}
                    </h3>
                    <p v-if="currentlist.paragraph">
                        {{ currentlist.paragraph }}
                    </p>
                    <div v-if="currentlist.social" class="social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-google-plus-g"></i>
                    </div>
                    <ul>
                        <li v-for="currentLink in currentlist.list">
                            {{ currentLink }}
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div id="footer-bottom">
            <div class="container">
                <ul>
                    <li>Terms And Condition</li>
                    <li>Policy</li>
                    <li>About</li>
                </ul>
                <div class="copyright">
                    © 2020 <span>@Themepul</span> All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">

@use '../styles/variables' as *;

#footer-top {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/img/ft-bg.jpg");
    background-size: cover;
    background-position: center;

    .container {
        display: flex;
        justify-content: space-between;
        padding: 70px 0px;
    }

    .footer-links  {
        width: 25%;
        padding: 0px 10px;

        .links-title {
            margin-bottom: 20px;
            position: relative;

            &::after {
                content: '';
                width: 30px;
                height: 5px;
                background-color: white;
                position: absolute;
                bottom: -5px;
                left: 0;

            }
        }

        .social {
            display: flex;
            gap: 20px;
            margin-top: 20px;

            .fa-brands {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border-radius: 15px;
            }

            .fa-facebook-f {
                background-color: #3B5998;
                &:hover {
                    background-color: transparent;
                    cursor: pointer;
                    color: $primary;
                }
            }

            .fa-twitter {
                background-color: #00ACEE;  
                &:hover {
                    background-color: transparent;
                    cursor: pointer;
                    color: $primary;
                }      
            }
            .fa-linkedin-in {
                background-color: #0D6C99;
                &:hover {
                    background-color: transparent;
                    cursor: pointer;
                    color: $primary;
                }
            }
            .fa-square-instagram {
                background-color: #9E1E27;
                &:hover {
                    background-color: transparent;
                    cursor: pointer;
                    color: $primary;
                }
            }
            .fa-google-plus-g {
                background-color: #C74436;
                &:hover {
                    background-color: transparent;
                    cursor: pointer;
                    color: $primary;
                }
            }
        }

        ul {
            list-style-type: none;

            li {
                margin-bottom: 10px;

                &:hover {
                    color: $primary;
                    cursor: pointer;
                }
            }
        }
    }
}

#footer-bottom {

    padding: 20px 0px;

    .container {
        display: flex;
        justify-content: space-between;

        ul {
            list-style-type: none;
            display: flex;
            gap: 20px;

            li:hover {
                color: $primary;
                cursor: pointer;
            }
        }

        span {
            color: $primary;
        }
    }
}
</style>