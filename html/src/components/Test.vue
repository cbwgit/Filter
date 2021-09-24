<template>
  <div v-for="(item,key,index) in data" :key="index">
    {{key}}
    <div v-for="(it,inde) in item" :key="inde">
      {{it}}
    </div>
    ------------------------
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      data: {}
    }
  },
  methods: {
    getData(){
      console.log()
      this.axios.get(process.env.VUE_APP_Server_URL+"getJson").then(response=>{
        this.data = response.data
      })
    }
  },
  created() {
    this.getData()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
