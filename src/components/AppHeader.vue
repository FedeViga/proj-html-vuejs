<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div id="header-top">
            <div class="container">
                <div class="links">
                    <div class="mail">
                        <i class="fa-regular fa-envelope"></i>
                        Superhit Top Movie <span>** King Star **</span>
                    </div>
                    <div class="social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-google-plus-g"></i>
                    </div>
                </div>
                <div class="login">
                    <i class="fa-solid fa-lock"></i>
                    Login
                </div>
            </div>
        </div>
        <div id="header-bottom">
            <div class="container">
                <img src="../../public/img/cropped-logo.png" alt="logo">

                <div class="search">
                    <input type="search" placeholder="Search">
                    <button>Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">

@use '../styles/variables' as *;

header {

    font-size: 12px;

    #header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 0px;
        border-bottom: 1px solid $secondary;
    
        .container {
            display: flex;
            justify-content: space-between;
            width: 100%;
    
            .links {
    
                display: flex;
                gap: 30px;
                align-items: center;
    
                span {
                    color: $primary;
                }
    
                .social {
                    display: flex;
                    gap: 10px;

                    .fa-facebook-f {
                        color: #3B5998;
                    }
                    .fa-twitter {
                        color: #00ACEE;        
                    }
                    .fa-linkedin-in {
                        color: #0D6C99;
                    }
                    .fa-square-instagram {
                        color: #9E1E27;
                    }
                    .fa-google-plus-g {
                        color: #C74436;
                    }
                }
            }
        }
    
    
    }
    
    #header-bottom {
        border-bottom: 1px solid $secondary;
        padding: 18px 0px;
    
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            input {
                background-color: $primary-bg;
                color: $secondary;
                height: 50px;
                border: 1px solid $secondary;
                padding: 0px 10px;
            }
    
            button {
                height: 50px;
                padding: 10px 20px;
                background-color: $primary;
            }
        }
    }
}

</style>