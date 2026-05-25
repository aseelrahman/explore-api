fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then((data) => console.log(data))

// console.log(result);

const loadData = () => {
    // promise of response
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise of json data
    .then(response => response.json())
    .then((data) => console.log(data))
} 

const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts#'
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data))
}

const displayPost = (posts) => {
    posts.forEach(post => {
        console.log(post);
    });
    
}