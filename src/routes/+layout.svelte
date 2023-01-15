<style>
    .nav {
      display: flex;
      align-items: center;
      justify-content: center
    }


    img {width: 40%;}

    .text {
    font-size: 20px;
    }
</style>

<script>
    let src = "/logo.jpg"
</script>

<nav>
    <div class="nav">
        <div class="logo">
            <img src={src} alt="Logo">
        </div>
        <div class="text">
            <p>Discos Distribuídos</p>
        </div>
    </div>
</nav>

<slot />