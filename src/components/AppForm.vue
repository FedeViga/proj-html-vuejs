<script>

export default {
    name: 'AppForm',
}
</script>

<template>
    <section>
            <div class="container">
                <div class="form">
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Last Name">
                    <input type="email" placeholder="Email Address">
                </div>
                <div class="button">Subscribe</div>
            </div>
        </section>
</template>

<style lang="scss">

@use '../styles/variables' as *;

section:nth-of-type(5) {
    
    margin-bottom: 70px;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-image: url('/img/form-bg-1.png');
        background-size: cover;
        height: 360px;

        .form {
            display: flex;
            gap: 20px;
            height: 44px;
            
            input {
                background-color: transparent;
                border: 2px solid white;
                border-radius: 22px;
                padding-left: 20px;

                &::placeholder {
                    color: white;
                }
            }
        }

        .button {
            background-color: $primary-bg;
            padding: 10px 20px;
            border-radius: 22px;
            transition: .2s ease;

            &:hover {
                cursor: pointer;
                background-color: white;
                color: $primary-bg;
            }
        }
    }
}

</style>