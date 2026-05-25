
const data = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log("Hello");
        // .then(res => res.json())
        // .then(data => console.log(data))
    const json = await res.json();
    console.log(json);
    
    console.log(true);
}

data()