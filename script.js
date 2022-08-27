const Api=(()=>{
    const baseUrl='http://localhost:4232/courseList/1'
    const todospath="courseList"
    const getTodos=()=>{
    fetch([baseUrl,todospath].join("/"))
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
    return {
        getTodos,
    }
    })()
    Api.getTodos( )
    