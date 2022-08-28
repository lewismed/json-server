const Api=(()=>{

    baseUrl='http://localhost:4232/courseList/1'
    //'http://localhost:4232/posts/1'
    //'http://localhost:4232/courseList/1'
    //http://localhost:4232/posts/1'
    todospath="courseList";

getTodos=()=>
fetch([baseUrl,todospath].join('/')).then((response) => response.json()
);
  //.then(json => console.log(json))

deleteTodo=(id)=>{};

return {
    getTodos,
deleteTodo,};
})();

//api().getTodos( )



/* ~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~ */
const View=(()=>{
    const domstr={classlist:"#nonselected_containter",deletebtn:'.deletebtn'}
const render=(ele,tmp)=>{
    ele.innerHTML=tmp
}







const createTmp=arr=>{
    let tmp=''
    arr.forEach(todo=>{
        tmp+=`              <li>
       <span>${todo.courseName}</span><br>
        <span>${todo.credit}</span><br>
       <span>${todo.required}</span><br>
       <span>${todo.courseId}</span><br>
       
      
       <button class ='deletebtn' id="${todo.courseId}>X</button>
      
      </li>

            
        `
    })
    return tmp;
}

   return{render,
    domstr,
    createTmp

   }
 
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

const controller=((model,view)=>{
const init=()=>{
    const todolist=document.querySelector(view.domstr.classlist)

    //console.log(todolist)
   model.getTodos().then(todos=>{
    const tmp=view.createTmp(todos);
   view.render(todolist,tmp)


   const deletebtns=document.querySelectorAll(view.domstr.deletebtn);
   console.log(deletebtns)
   deletebtns.forEach(btn =>{
       btn.addEventListner()
    })

   }
   )
}



   return{
       init
   }
 
   })(Model,View)
 
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



