<script>
import { store } from '../store';

export default {
    name: 'AppNav',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <nav>
        <div class="container">
            <ul class="links">
                <li v-for="currentLink in store.navLinks">
                    {{ currentLink.name }}
                    <i v-if="currentLink.linkList.length > 1" class="fa-solid fa-caret-down"></i>
                    <div class="dropdown" v-if="currentLink.linkList.length > 1">
                        <div v-for="dropdownLink in currentLink.linkList">
                            {{ dropdownLink }}
                        </div>
                    </div>
                </li>
            </ul>
            <div class="shop">
                <i class="fa-solid fa-basket-shopping"></i>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">

@use '../styles/variables' as *;

nav {

    position: sticky;
    top: 0px;
    z-index: 2;
    background-color: $primary-bg;
    border-bottom: 1px solid $secondary;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        .links {
            display: flex;
            align-items: center;
            height: 70px;
            list-style-type: none;
            display: flex;
            gap: 20px;

            li {
                position: relative;
            }

            li:hover {
                color: $primary;
                cursor: pointer;
            }

            li:hover .dropdown {
                display: block;
            }

            .dropdown {
                color: white;
                position: absolute;
                width: 150px;
                padding-top: 20px;
                display: none;
                background-color: $primary-bg;

                div {
                    padding: 10px;

                    &:hover {
                        color: $primary;
                    }
                }
            }

        }
    
        .shop {
            position: relative;
    
            &::after {
                content: '0';
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: $primary;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                position: absolute;
                top: -12px;
                right: -12px;
        
            }
        }
    
    }
}


</style>