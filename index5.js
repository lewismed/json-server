const Api = (() => {
    const baseUrl = "http://localhost:4232/courseList";
   
    const getCourse = () =>
      fetch([baseUrl]).then((response) => response.json());
 
   
    return {
     getCourse,
   
    };
  })();




/* ~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~ */
const View = (() => {
  const domstr = {
    course: "#notselectedCourse",
    button: "#select_button",
    course2: "#selectedCourse",
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const createTmp = (arr) => {
    let tmp = "";

    arr.forEach((course) => {
      tmp += `
            <li class="courseItem" id="${course.courseId}">
              <span class="name">${course.courseName}</span>
              <span>Course type: ${
                course.required ? "Cumpolsery" : "Elective"
              }</span>
              <span>Course credit: ${course.credit}</span>
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
  const { getCourse } = api;

  class Courseses {
    constructor(courseName, courseCredit, courseType) {
      this.courseCredit = courseCredit;
      this.courseName = courseName;
      this.courseType = courseType;
    }
  }

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
    getCourse,
    transfer,
  };
})(Api, View);

//** =========Controller=============== */

const Controller = ((model, view) => {
  const transfer = new model.transfer();
  let selectedCourses = [];
  //let totalcredit = 0;

  const selected_Btn = () => {
    const button = document.querySelector(view.domstr.button);
    button.addEventListener("click", (event) => {
      if (totalcredit < 18) {



        let list = document.querySelectorAll("#notselectedCourse li");
        for (let i = 0; i < lis.length; i++) {
          let name = list[i].getElementsByClassName("name")[0].innerHTML;
          let t = list[i].innerHtml;
          selectedCourses.forEach((select_Course) => {
            if (select_Course.courseName === name)


              list[i].parentNode.removeChild(list[i]);
          });
        }
      }

      const ulcontainer = document.querySelector(view.domstr.course2);
      const tmp = view.createTmp(selectedCourses);
      view.render(ulcontainer, tmp);
    });
  };



  const init = () => {
    model.getCourse().then((course) => {
      console.log(course);
      transfer.courseList = course;
    });
  };

  const run = () => {
    init();
    //selectCourse();
    selected_Btn();
  };
  return {
      run
   ,
  };
})(Model, View);

Controller.run();