const loadData = () => {
    // promise of response
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise of json data
    .then(response => response.json())
    .then((data) => console.log(data))
} 