async function getter() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const response =await data.json();
    return response;
    
  }

  export default getter;