const loadPost = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts#'
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayPost(data)
    })
}

// {
//     "userId": 10,
//     "id": 95,
//     "title": "id minus libero illum nam ad officiis",
//     "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
// }

const displayPost = (posts) => {
    // 1. get the container and empty the container
    const postsContainer = document.getElementById('post-container');
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {
        // 2. create element
        
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        // 3. add to container
        postsContainer.appendChild(postCard)
        
    });
}

loadPost();