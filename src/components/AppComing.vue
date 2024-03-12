<script>
export default {
    name: 'AppComing',
}
</script>

<template>
    <div class="jumbo">
        <div class="text">
            <h2>COMING SOON MOVIE</h2>
            <h1>
                MAX STILL
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, perferendis tenetur tempore commodi iste culpa quia ducimus voluptatem porro minima harum, incidunt atque? Nisi laboriosam vitae rerum incidunt, quas optio.
            </p>
        </div>
    </div>
</template>

<style lang="scss">

@use '../styles/variables' as *;

.jumbo:nth-of-type(2) {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/coming-bg.jpg");
    background-size: cover;
    background-position: center;
    

    h2 {
        color: $primary;
    }
}

</style>