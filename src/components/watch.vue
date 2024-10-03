<template>
  <div class="watch">
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
                  <router-link class="dropdown-item active" to="/watch">Shows/Movies</router-link>
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
        <img src="../assets/watching.jpg" alt="Remote pointed at a TV">
        <div class="text">
          <h1>Watching Shows/Movies</h1>
          <p>Watching shows and movies is one of my favorite pastimes. I enjoy diving into different genres, from gripping dramas and thrilling action films to lighthearted comedies and thought-provoking documentaries. Each story transports me to new worlds, introduces me to fascinating characters, and sparks my imagination. Whether I’m binge-watching a series or enjoying a classic film, I love the way visual storytelling can evoke emotions and inspire conversation. This hobby allows me to relax, unwind, and connect with diverse narratives and cultures.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .watch {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to top right, #662D8C, #ED1E79);
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
