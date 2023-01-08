console.log("Hello World");

const hello = document.getElementById("hello");

hello.onclick = ()=>{console.log("clicked")};

const baseUrl = "https://qlg4skavilmrb6vpdsyfgd72fi0jrfmi.lambda-url.ap-southeast-1.on.aws/";

window.onload = ()=>{axios.get(baseUrl).then((res)=>console.log(res))};
