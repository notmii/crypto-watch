<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light hidden">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Poor Daddy</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'CryptoDashboard' }"
            >
              Crypto
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'ForexDashboard' }"
            >
              Forex
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'PseStockDashboard' }"
            >
              PSE
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
</script>
