<template>
  <div class="books">
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
                  <router-link class="dropdown-item active" to="/books">Books</router-link>
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
        <img src="../assets/books.jpg" alt="Stacked books">
        <div class="text">
          <h1>Reading Books</h1>
          <p>One of my favorite hobbies is reading, with a particular focus on self-improvement books. I enjoy exploring various topics that inspire personal growth and development, from productivity techniques to mindfulness practices. Each book offers new insights and tools that I can apply to my life, helping me to continually evolve and strive for my best self. This passion not only enriches my understanding but also motivates me to implement positive changes in my daily routine.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'books'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .books {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to top right, #D4145A, #FBB03B);
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
