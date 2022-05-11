const newPost = $(".new-post");
const userPosts = document.querySelector("#blogPost-scroll");

newPost.on("click", function(){
    console.log("new post");
    document.location.replace('/post')
} );

const getUserPosts = async () =>{
    const response = await fetch('api/user',{
        method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    console.log(data.posts);
    data.posts.forEach(element => {
        
        addPost(element);
    });
}

const addPost = (post) => {
    console.log(post);
    const postItem = document.createElement("div");
    postItem.classList.add("blog_post");
    postItem.setAttribute("data-id", post.id);
    postItem.innerHTML = `<div class = "post_header"><div class = "post_title">${post.title}</div><div class = "post_info"> Date: ${post.date}</div></div><div class = "post_body">${post.body}</div>`;
    userPosts.append(postItem);
}

getUserPosts();
