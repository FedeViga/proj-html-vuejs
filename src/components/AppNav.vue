<script>
export default {
    name: 'AppNav',
}
</script>

<template>
    <nav>
        <div class="container">
            <ul class="links">
                <li>Home</li>
                <li>Celebrity</li>
                <li>Movie</li>
                <li>Page</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact Us</li>
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
        padding: 20px 0px;
    
        .links {
            list-style-type: none;
            display: flex;
            gap: 20px;
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