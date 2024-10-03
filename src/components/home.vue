<template>
  <div class="home">
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
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hobbies</a>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/books">Books</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item" to="/games">Video Games</router-link>
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
        <img src="../assets/my_photo.jpg" alt="Chester playing the Switch">
        <div class="text">
          <h1>Chester's Hobbies</h1>
          <p>In my free time, I immerse myself in the world of books, exploring different genres and stories. I also enjoy playing video games, where I can dive into immersive adventures and challenge myself. When I'm looking to relax, I love watching shows and movies, getting lost in captivating narratives and characters. Additionally, I have a deep appreciation for music, often finding joy in discovering new artists and genres that resonate with me. Each of these hobbies brings me a unique sense of fulfillment and creativity.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to top right, #2E3192, #1BFFFF);
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
