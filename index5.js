const Api = (() => {
    const baseUrl = "http://localhost:4232/courseList";
   
    const gettodo = () =>
      fetch([baseUrl]).then((response) => response.json());
 
   

    return {
     gettodo,
   
    };
  })();




/* ~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~ */
const View = (() => {
  const domstr = {
    course: "#notselectedCourse",
    class_button: "#select_button",
    second_course: "#selectedCourse",
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const createTmp = (arr) => {
    let tmp = "";

    


    arr.forEach((classes) => {

      if (classes.required==true){
        classes.required="compulsory"} else{
            classes.required="Elective"
        }
      tmp += `
            <li class="classid" id="${classes.courseId}">
              <span class="class_name">${classes.courseName}</span>
              <span>Course type: ${classes.required}</span>
              <span>Course credit: ${classes.credit}</span>
            </li>
           
          `;
    });

    return tmp;
  };

  return {
    render,
    domstr,
    createTmp,
  };
})();

//**============== Model=============== */
const Model = ((api, view) => {
  const { gettodo } = api;

  class Courseses {
    constructor(courseName, courseCredit, courseType) {
      this.courseCredit = courseCredit;
      this.courseName = courseName;
      this.courseType = courseType;
    }
  }

//console.log(Courses.courseName)


  class transfer {
    #courseList = [];

    get courseList() {
      return this.#courseList;
    }
    set courseList(secondlist) {
      this.#courseList = [...secondlist];

      const ulcontainer = document.querySelector(view.domstr.course);
      const tmp = view.createTmp(this.#courseList);
      view.render(ulcontainer, tmp);
    }
  }

  return {
    gettodo,
    transfer,
  };
})(Api, View);

//** =========Controller=============== */

const Controller = ((model, view) => {
  const transfer = new model.transfer();
  let Courses_take = [];
  let totalcredits = 0;

  const select_Button = () => {
    const button = document.querySelector(view.domstr.class_button);
    
   // let totalCredits=0
    //let Courses_take=[]
    button.addEventListener("click", (event) => {
     
       
      let list = document.querySelectorAll("#notselectedCourse li");
      for (let i = 0; i < list.length; i++) {
        let class_name = list[i].getElementsByClassName("class_name")[0].innerHTML;

        


        Courses_take.forEach((select_Course) => {
          if (select_Course.courseName!=class_name){
            console.log(select_Course.courseName)
          }
          else{
         


            list[i].parentNode.removeChild(list[i]);// this will remove a node from he ree unless is no alreadl in he ree
      }})
       };
      




const selectCourse = () => {
    const list_container = document.querySelector(view.domstr.course);// this will give me acess to the different avalibale courses
    list_container.addEventListener("click", (event) => {
      if (event.target.classList.contains("classid")) {
        let classList = event.target.classList;
        let classes = transfer.courseList.find(
          (e) => e.courseId == event.target.id
        );
        
        
        
         //find where the courseid matches the id we are clickinng
        }

        if (classList.contains("selected")) {
          Courses_take =  Courses_take.filter((e) => {
            return e.courseId != classes.courseId;
          });
          totalcredits =totalcredits- classes.credit;
          event.target.classList.remove("selected");
        } else {
         
          if (totalcredits + classes.credit > 18) {
            alert("You cannot choose more than 18 credits in one semester!");
          } else {
            Courses_take.push(classes);
            totalcredit += classes.credit;
            event.target.classList.add("selected");
            document.getElementById("total_sum").innerHTML = totalcredits;
          }
        }
        const list_container = document.querySelector(view.domstr.course2);
        const tmp = view.createTmp(Courses_take);
        view.render(list_container, tmp);
      }
    )};
  ;


















 const list_container = document.querySelector(view.domstr.second_course);
      const tmp = view.createTmp(Courses_take);
      view.render(list_container, tmp);
   } )} 
  ;
;


//totalCredits
  //if (event.target.classList.contians(classid)){
    ///check_selct=event.target.classList;
    //class=transfer.#courselist.find(

    //)
  //}
























  const init = () => {
    model.gettodo().then((course) => {
      console.log(course);
      transfer.courseList = course;
    });
  };

  const run = () => {
    init();
    //selectCourse();
    select_Button();
  };
  return {
      run
   ,
  };
})(Model, View);

Controller.run();
