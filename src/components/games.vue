<template>
  <div class="games">
    <div class="content">
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Chester Tayag</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hobbies</a>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/books">Books</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item active" to="/games">Video Games</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item" to="/watch">Shows/Movies</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item" to="/music">Music</router-link>
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control" id="disabledInput" type="text" placeholder="Under construction..." disabled="">
            </form>
          </div>
        </div>      
      </nav>

      <div class="info">
        <img src="../assets/gaming.jpg" alt="Video game consoles">
        <div class="text">
          <h1>Playing Video Games</h1>
          <p>One of my favorite hobbies is playing video games, particularly action, open-world, puzzle, and platforming titles. I love the adrenaline rush of fast-paced action games, where I can test my reflexes and skills. Open-world games allow me to explore vast, immersive environments and engage in thrilling adventures at my own pace. I also enjoy the challenge of puzzle games, where I can flex my problem-solving abilities, and the nostalgic charm of platformers, which combine creativity and precision. Each genre offers a unique experience that keeps me engaged and entertained.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'games'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .games {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to top right, #009245, #FCEE21);
  }

  .content {
    max-width: 1250px;
    border: solid 5px #020202;
    background-color: #FFFDFA;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .text {
    margin: 0 50px;
  }
</style>
