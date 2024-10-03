<template>
  <div class="music">
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
                  <router-link class="dropdown-item" to="/games">Video Games</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item" to="/watch">Shows/Movies</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="dropdown-item active" to="/music">Music</router-link>
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
        <img src="../assets/music.jpg" alt="A headset">
        <div class="text">
          <h1>Listening to Music</h1>
          <p>Listening to music is one of my favorite hobbies, and I especially enjoy pop and EDM. I love the catchy melodies and infectious energy of pop songs, which often lift my mood and make me want to sing along. EDM, with its pulsating beats and dynamic rhythms, energizes me and is perfect for both workouts and moments of celebration. Exploring new artists and tracks within these genres keeps my playlists fresh and exciting, allowing me to experience the power of music in different contexts. Whether I’m commuting or relaxing at home, music always plays a significant role in my life.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'music'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .music {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to top right, #93A5CF, #E4EfE9);
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
