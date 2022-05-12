const newPost = $(".new-post");
const userPosts = document.querySelector("#blogPost-scroll");
const postEdit = $("#blogPost-scroll")


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
    if(data.posts[0]){
    data.posts.forEach(element => {
        
        addPost(element);
    });}else{
        const postMessage = document.createElement("div");
        postMessage.classList.add("no_posts");
        postMessage.innerHTML = `User does not have any blog posts.`
        userPosts.append(postMessage);
    }
}

const addPost = (post) => {
    console.log(post);
    const postItem = document.createElement("div");
    postItem.classList.add("blog_posts");
    postItem.setAttribute("data-id", post.id);
    postItem.innerHTML = `<div class = "post_header"><div class = "post_title">${post.title}</div><div class = "post_info"> Date: ${post.date}</div></div><div class = "post_body">${post.body}</div>`;
    userPosts.prepend(postItem);
}

const editPost = async (event) => {
    const postID = $(event.currentTarget).attr("data-id");
    console.log(postID);
    await fetch(`/api/post/${postID}`,{
        method:'POST',
    })
    location.replace("/update")
}

postEdit.on("click", ".blog_post", editPost);
getUserPosts();
