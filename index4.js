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
    course: "#availbeleCourse",
    button: "#sbtn",
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

  class Course {
    constructor(courseName, courseCredit, courseType) {
      this.courseCredit = courseCredit;
      this.courseName = courseName;
      this.courseType = courseType;
    }
  }

  //class State {
    //#courseList = [];

    //get courseList() {
     // return this.#courseList;
   // }
   // set courseList(newlist) {
     // this.#courseList = [...newlist];

      //const ulcontainer = document.querySelector(view.domstr.course);
      //const tmp = view.createTmp(this.#courseList);
      //view.render(ulcontainer, tmp);
   // .//}
 // }

  