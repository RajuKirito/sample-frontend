console.log("Hello World");

const hello = document.getElementById("hello");

hello.onclick = ()=>{console.log("clicked")};

const baseUrl = `sample-backend-production.up.railway.app`;

window.onload = ()=>{axios.get(baseUrl).then((res)=>console.log(res))};
