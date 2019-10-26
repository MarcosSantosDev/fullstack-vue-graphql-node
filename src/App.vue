<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">Gerador de nomes utilizando Vuejs, Graphql e Node</h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h5>
              Prefixos
              <span class="badge badge-info">{{ sufixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" :key="sufix">{{ sufix }}</li>
                </ul>
                <br />
                <input class="form-control" type="text" placeholder="Digite o Prefixos" />
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>
              Sufixos
              <span class="badge badge-info">{{ prefixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" :key="prefix">{{ prefix }}</li>
                </ul>
                <br />
                <input class="form-control" type="text" placeholder="Digite o Sufixos" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <h5>
          Domìnios
          <span class="badge badge-info">{{ domains.length }}</span>
        </h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="domain in domains" :key="domain">{{ domain }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
  name: "app",
  data() {
    return {
      prefixes: ["Air", "Jet", "Fligth"],
      sufixes: ["Hub", "Station", "Mart"],
      domains: [
        "AirHub",
        "AirStation",
        "AirMart",
        "JetHub",
        "JetStation",
        "JetMart",
        "FligthHub",
        "FligthStation",
        "FligthMart"
      ]
    };
  }
};
</script>
<style >
#slogan {
  padding-top: 30px;
  padding-bottom: 30px;
}

#main {
  background: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>