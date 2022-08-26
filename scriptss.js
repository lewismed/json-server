console.log("hr")


const api=(()=>{

    baseUrl='http://localhost:4232/posts/1'
    todospath='todos ';

getTodos=()=>{
fetch([this.baseUrl,this.todospath].join('/'))
   .then(response => response.json())
   .then(json => console.log(json))
};
deleteTodo=(id)=>{};
return {getTodos};
})()

api.getTodos()
/*
class Api{

    baseUrl='http://localhost:4232/posts/1'
    todospath='todos ';

getTodos=()=>{
fetch([this.baseUrl,this.todospath].join('/'))
   .then(response => response.json())
   .then(json => console.log(json))
};
deleteTodo=(id)=>{};

};
const api= new Api()
api.getTodos( )
8*/
/*
//const Api=()=>{

   const getTodos=()=>{
    fetch('http://localhost:4232/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
   }
    return {
        getTodos
   }
    }
   Api().getTodos( )*/