<template>
  <div>
     <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">ADD NEW TASK</b-btn>
      </b-card-header>
      <b-collapse id="accordion1"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="rapih">
           <b-input type="text" v-model="title" placeholder="title"></b-input>
           <b-input type="number" v-model="point" placeholder="point"></b-input>
           <b-input type="text" v-model="description" placeholder="description"></b-input>
           <b-button @click="addTask()">SUBMIT</b-button>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
      <b-card-group deck>
          <b-card title="ceritanya backlog">
            <Backlog v-for="(task,index) in backlog" :key="index" :task="task" :index="index" list="backlog"  @delete-task="deleteTask" @move="operTask"/>
          </b-card>
          <b-card title="ceritanya todo"> 
              <Todo v-for="(task,index) in todo" :key="index" :task="task" :index="index" list="todo"  @delete-task="deleteTask" @move="operTask"/>
          </b-card>
           <b-card title="ceritanya doing">
              <Doing v-for="(task,index) in doing" :key="index" :task="task" :index="index" list="doing"  @delete-task="deleteTask" @move="operTask"/>
          </b-card>
           <b-card title="ceritanya done">
              <Done v-for="(task,index) in done" :key="index" :task="task"  :index="index" list="done"  @delete-task="deleteTask" @move="operTask"/>
          </b-card>
      </b-card-group>
  </div>
</template>

<script>
import { backlog, todo, doing, done } from "@/firebase";
import Backlog from "@/components/Backlog";
import Todo from "@/components/Todo";
import Doing from "@/components/Doing";
import Done from "@/components/Done";
export default {
  name: "Home",
  firebase: {
    backlog,
    todo,
    doing,
    done
  },
  components: {
    Backlog,
    Todo,
    Done,
    Doing
  },
  data() {
    return {
      title: "",
      point: 0,
      description: ""
    };
  },
  methods: {
    addTask() {
      console.log(this.title);
      backlog.push({
        title: this.title,
        point: this.point,
        description: this.description
      });
      this.title = "";
      this.point = 0;
      this.description = "";
    },
    deleteTask(payload) {
      if (payload.from === "backlog") {
        backlog.child(payload.id).remove();
      } else if (payload.from === "todo") {
        todo.child(payload.id).remove();
      } else if (payload.from === "doing") {
        doing.child(payload.id).remove();
      } else if (payload.from === "done") {
        done.child(payload.id).remove();
      }
    },
    operTask(payload) {
      if (payload.from === "backlog" && payload.to === "todo") {
        todo.push({
          title: payload.title,
          point: payload.point,
          description: payload.description
        });
        backlog.child(payload.id).remove();
      } else if(payload.from === 'todo' && payload.to == "backlog"){
        backlog.push({
          title : payload.title,
          point : payload.point,
          description : payload.description
        })
        todo.child(payload.id).remove()
      } else if(payload.from === 'todo' && payload.to === 'doing'){
        doing.push({
          title:payload.title,
          point:payload.point,
          description:payload.description
        })
        todo.child(payload.id).remove()
      } else if(payload.from ==='doing'&& payload.to==='todo'){
        todo.push({
          title : payload.title,
          point : payload.point,
          description : payload.description
        })
        doing.child(payload.id).remove()
      }else if(payload.from ==='doing' && payload.to === 'done'){
        done.push({
         title : payload.title,
         point : payload.point,
         description : payload.description
        })
        doing.child(payload.id).remove()
      }else if(payload.from === 'done' && payload.to ==='doing'){
        doing.push({
          title : payload.title,
          point : payload.point,
          description : payload.description
        })
        done.child(payload.id).remove()
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0%;
}
.rapih {
  margin: 0px 70px 0px 70px;
}
</style>
