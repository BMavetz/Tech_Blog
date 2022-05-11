

const getBlogPost = async () =>{
    const response = await fetch('api/post',{
        method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    addPost(data);
}

const addPost = (post) => {
    document.querySelector('#titleInput').value = post.title;
    document.querySelector('#blogContent').value = post.body;
}

getBlogPost();