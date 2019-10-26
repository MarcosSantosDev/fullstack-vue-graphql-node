<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">Gerador de nomes utilizando Vuejs, Graphql e Node.</h6>
    </div>
    <div id="main">
      <DomainList />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import DomainList from "./components/DomainList";

export default {
	name: "app",
	components: {
		DomainList
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
  padding: 20px 0px;
}

.title-app {
  margin-top: 10px;
}
</style>