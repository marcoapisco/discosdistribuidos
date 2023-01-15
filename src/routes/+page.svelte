<script>
    import Typewriter from 'svelte-typewriter'
    
    let portugueseflag = "/portuguese.png"
    let usaflag = "/usa.png"
</script>


<Typewriter mode="loopRandom">
    <p>Welcome to Discos Distribuídos</p>
    <p>Bem vindo à Discos Distribuídos</p>
    <p>Bienvenido a Discos Distribuídos</p>
    <p>Willkommen bei Discos Distribuídos</p>
    <p>Bienvenue à Discos Distribuídos</p>
</Typewriter>

<p>Select your language:</p>
<div class="language">
    <div class="flag">
        <img src={portugueseflag} style="width: 5em" alt="Português or Portuguese">
    </div>
    <div class="languageextense">
        <a href="/pt/">Português</a>
    </div>
</div>
<p>&zwnj;</p>
<div class="language">
    <div class="flag">
        <img src={usaflag} style="width: 5em" alt="English or Inglês">
    </div>
    <div class="languageextense">
        <a href="/en/">English</a>
    </div>
</div>