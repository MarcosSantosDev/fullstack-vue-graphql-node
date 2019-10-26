<template>
  <div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <AppItemList title="Prefixos" v-bind:items="prefixes" v-on:addItem="addPrefix" v-on:deleteItem="deletePrefix"/>
          </div>
          <div class="col-md">
            <AppItemList title="Sufixos" v-bind:items="sufixes" v-on:addItem="addSufix" v-on:deleteItem="deleteSufix"/>
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-md-12">
            <h5>
              Domìnios
              <span class="badge badge-info">{{ domains.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="domain in domains" :key="domain.name">
                    <div class="row">
                      <div class="col-md">
                        {{ domain.name }}
                      </div>
                      <div class="col-md text-right">
                        <a class="btn btn-info" v-bind:href="domain.checkout" target="_blank"><span class="fa fa-shopping-cart"></span></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import AppItemList from "./AppItemList";

export default {
	name: "domainList",
	data() {
		return {
			prefixes: ["Air", "Jet", "Fligth"],
			sufixes: ["Hub", "Station", "Mart"],
		};
	},
	components: {
		AppItemList
	},
	methods: {
		addPrefix(prefix) {
			this.prefixes.push(prefix);
		},
		deletePrefix(value) {
			this.prefixes = this.prefixes.filter(prefix => prefix != value);      
		},
		addSufix(sufix) {
			this.sufixes.push(sufix);
		},
		deleteSufix(value) {
			this.sufixes = this.sufixes.filter(sufix => sufix != value);
		}
	},
	computed: {
		domains() {
			const domains = [];
			this.prefixes.map(prefix => {
				this.sufixes.map(sufix => { 
					const domain = prefix + sufix;
					const uri = `https://checkout.hostgator.com.br/?a=add&sld=${ domain.toLowerCase() }&tld=.com`;
    
					domains.push({
						name: domain,
						checkout: uri 
					});
				});
			});
      
			return domains;
		}
	}
};
</script>
<style >
</style>