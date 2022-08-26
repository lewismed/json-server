const Api=(()=>{

    baseUrl='http://localhost:4232/posts/1'
    todospath='todos ';

getTodos=()=>
fetch([baseUrl,todospath].join('/')).then((response) => response.json()
);
  //.then(json => console.log(json))

deleteTodo=(id)=>{};

return {
    getTodos,
deleteTodo};
})();

//api().getTodos( )



/* ~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~ */
const View=(()=>{

   return{}
  
   })()
  
  


/* ~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~ */

const Model = ((api) => {
    const { getTodos, deleteTodo } = api;
  
    return {
      getTodos,
      deleteTodo,
    
    };
  })(Api);
  



/*
const Model=((api)=>{
    const { getTodos, deleteTodo } = api;
   //const {getTodos, deleteTodo}= api;
   //const deleteTodo=api.deleteTodo;

   return{

getTodos,
deleteTodo

   }})(Api)
  
  */


/* ~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~ */

const controller=((model)=>{
const init=()=>{
   model.getTodos().then(console.log)
}


   return{
       init
   }
  
   })(Model)
  
   controller.init();
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