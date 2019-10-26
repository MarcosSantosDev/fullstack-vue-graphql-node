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
              <span class="badge badge-info">{{ prefixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" :key="prefix">
                    <div class="row">
                      <div class="col-md">
                        {{ prefix }}
                      </div>
                      <div class="col-md text-right">
                        <button class="btn btn-info" v-on:click="deletePrefix(prefix)"><span class="fa fa-trash"></span></button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    v-model="prefix"
                    v-on:keyup.enter="addPrefix"
                    placeholder="Digite o Prefixos"
                  />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-info" v-on:click="addPrefix">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>
              Sufixos
              <span class="badge badge-info">{{ sufixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" :key="sufix">
                    <div class="row">
                      <div class="col-md">
                        {{ sufix }}
                      </div>
                      <div class="col-md text-right">
                        <button class="btn btn-info" v-on:click="deleteSufix(sufix)"><span class="fa fa-trash"></span></button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    v-model="sufix"
                    v-on:keyup.enter="addSufix"
                    placeholder="Digite o Sufixos"
                  />
                  <div class="input-group-append" v-on:click="addSufix">
                    <button type="button" class="btn btn-info">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
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
			],
			prefix: "",
			sufix: ""
		};
	},
	methods: {
		addPrefix() {
			this.prefixes.push(this.prefix);
			this.prefix = "";
			this.generate();
		},
		deletePrefix(value) {
			this.prefixes = this.prefixes.filter(prefix => prefix != value);
			this.generate();      
		},
		addSufix() {
			this.sufixes.push(this.sufix);
			this.sufix = "";
			this.generate();
		},
		deleteSufix(value) {
			this.sufixes = this.sufixes.filter(sufix => sufix != value);
			this.generate();
		},
		generate() {
			this.domains = [];

			this.prefixes.map(prefix => {
				this.sufixes.map(sufix => this.domains.push(prefix + sufix));
			});
		}
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