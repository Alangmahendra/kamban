<template>
  <div>
      <b-card :title="task.title">
          <p class="card-text">
          description : {{task.description}} <br>
          point : {{task.point}}
          </p>
          <b-button variant="primary" v-on:click="previous('todo')">Previous</b-button>
          <b-button variant="danger" v-on:click="remove">delete</b-button>
          <b-button variant="primary" v-on:click="next('done')">next</b-button>
      </b-card>
  </div>
</template>

<script>
export default {
  name : 'Doing',
  props : ['task','index','list'],
  data(){
      return{

      }
  },
  methods:{
      previous(to){
          this.task.id = this.task['.key']
          this.task.from=this.list
          this.task.index=this.index
          this.task.to = to
          this.$emit('move',this.task)
      },
      next(to){
          this.task.id = this.task['.key']
          this.task.from=this.list
          this.task.index=this.index
          this.task.to = to
          this.$emit('move',this.task)
      },
      remove(){
         this.task.id = this.task['.key']
         this.task.from = this.list
         this.task.index = this.index
         this.$emit('delete-task',this.task)
      }
  }
}
</script>

<style scoped>

</style>
