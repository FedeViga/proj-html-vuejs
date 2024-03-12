<script>
export default {
    name: 'AppJumbo',
}
</script>

<template>
    <div class="jumbo">
        <div class="text">
            <h2>Welcome To Our Movie Site</h2>
            <h1>
                OUR SPECIAL <span>MOVIES</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis tenetur tempore commodi iste culpa quia ducimus voluptatem porro minima harum, incidunt atque? Nisi laboriosam vitae rerum incidunt, quas optio.
            </p>
        </div>
    </div>
</template>

<style lang="scss">

@use '../styles/variables' as *;

.jumbo {
    position: relative;
    height: 700px;
    background-image: url('public/img/slider-1536x520.jpg');
    background-size: cover;

    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%);
        width: 350px;
        text-align: center;

        span {
            color: $primary;
        }
    }
}
</style>