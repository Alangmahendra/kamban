import {initializeApp} from 'firebase' ; 

    const app = initializeApp({ 
        apiKey: "AIzaSyDbklOWxtCkcXvzaGI_ow8huYyUk3mxIPE",
        authDomain: "todo-fancy-190613.firebaseapp.com",
        databaseURL: "https://todo-fancy-190613.firebaseio.com",
        projectId: "todo-fancy-190613",
        storageBucket: "",
        messagingSenderId: "328188420916"
})

    export const db = app.database()
    export const taskDB = db.ref('task')
    export const backlog = taskDB.child('backlog')
    export const todo = taskDB.child('todo')
    export const doing = taskDB.child('doing')
    export const done = taskDB.child('done')