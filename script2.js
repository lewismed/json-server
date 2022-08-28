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
    const domstr={classlist:"#nonselected_containter",
    courseId:'.course_id'}


const render=(ele,tmp)=>{
    ele.innerHTML=tmp
    console.log(ele)
}



const createTmp=arr=>{
    let tmp=''
    arr.forEach(todo=>{
        if (todo.required==true){
            todo.required="compulsory"}else{
                todo.required="Elective"
            }
        
        
        tmp+=`              <li class ='course_id' id="${todo.courseId}>
       <span>${todo.courseName}</span><br>
        <span>${todo.credit}</span><br>
       <span>${todo.required}</span><br>
       <span>${todo.courseId}
       
       
       </span>
    
      
      </li>

            
        `
     
    })
    
    return tmp;
}

console.log(createTmp.todo)
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
    //console.log(view.createTmp.tmp)
//const check=document.querySelector(view.)
    //console.log(todolist)
    //console.log(model.getTodos())
   model.getTodos().then(todos=>{
    const tmp=view.createTmp(todos);
   view.render(todolist,tmp)
//console.log(view.createTmp(todo))

   
   //const deleteTodo = () => {
       const selectBtn=()=>{
    const courseids = document.querySelector(view.domstr.courseId);
    courseids.addEventListner("click",(e)=>{
        if (totalnum<18){
            let lis=document.getElementsByClassName('name')[0].innerHTML
            let t=lis[i]=inner.html;
            selectedCourses.forEach((selCourse)=>{
                if (selCourse.courseName===name)
                lis[i].parentNode.removeChild(lis[i])})


            }
        }
    }



    const courseids = document.querySelector(view.domstr.courseId);
    courseids.addEventListner("click",(e)=>{
    if (e.target.classList.contains("course_id") {
        let classList = e.target.classList;
        let course = state.courseList.find(
          (elem) => elem.courseId == e.target.id
        );

        if (classList.contains("selected")) {
          selectedCourses = selectedCourses.filter((elem) => {
            return elem.courseId != course.courseId;
          });
          totalcredit -= course.credit;
          e.target.classList.remove("selected");
        } else {







    console.log(courseids)
    //let btn=getElementByTagName
   // ("button")
    courseids.forEach((btn=>{
        btn.addEventListner('click',e=>{
           console.log(e.target.courseId)
        }// target is where the event is triggered aka where we click
    )

   }))})}
//deletebtns.forEach(btn=>{btn.addEventListener('click', event => {
    //  console.log(event.target.courseId)
    
   // const nwetodos=todos.filter(ele=> +ele.courseId!==+event.target.courseId);
      //console.log(nwetodos)
      //const tmp=view.createTmp(nwetodos);
      //view.render(todolist,tmp)


      //if (event.target.className === 'deletebtn') {
       // state.todolist = state.todolist.filter(
          //(todo) => +todo.id !== +event.target.id
       // );
     // })
     // model.deleteTodo(+event.target.id);
    //})//);
   //})});



   /*const deletebtns=document.querySelectorAll(view.domstr.deletebtn);
   console.log(deletebtns)
   deletebtns.forEach(btn =>{
       btn
       
       .addEventListner('click',e=>{
           console.log(e.target.courseId)
       })
    })

   }
   )
}*/



   return{
       init
   }
 
   })(Model,View)
 
   controller.init();

   let idcheck=document.querySelectorAll(".deletebtn").innerText
console.log(idcheck)
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



