<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" v-model="num" placeholder="Provide a number..."   />
    </p>
    <p v-if="num">
      <b>{{toWords}}</b>
    </p>
    <p v-else>
      <b class="error">Please input a valid number</b>
    </p>
  </div>
</template>

<script>
import converter from 'number-to-words';

export default {
  name: 'Page',
  props: {
    msg: String
  },
  data() {
    return {
      num: null
    };
  },
  computed: {
    toWords() {
      return converter.toWords(this.num);
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 40px 0 0;
}
b {
  color: #42b983;
}
b.error {
  color: #ff0000  ;
} 
input {
  font-size: 24px;
  padding: 10px;
}
</style>
