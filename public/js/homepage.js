const blogPosts = document.querySelector("#blogPost-scroll");
const showPost = $("#blogPost-scroll");

const getBlogPosts = async () =>{
    const response = await fetch('api/post/all');
    const data = await response.json();
    console.log(data);
    console.log(data[0].user.user_name);
    data.forEach(element => {
        
        addPost(element);
    });
}

getBlogPosts();

const addPost = (post) => {
    const postItem = document.createElement("div");
    const numComment = post.comments.length;
    postItem.classList.add("blog_post");
    postItem.setAttribute("data-id", post.id);
    postItem.innerHTML = `<div class = "post_header"><div class = "post_title">${post.title}</div><div class = "user_info">${post.user.user_name}, Date: ${post.date}</div></div><div class = "post_body">${post.body}</div><div class = "comment">Total Comments: ${numComment}</div>`;
    blogPosts.prepend(postItem);
}

const viewPost = async (event) => {
    const postID = $(event.currentTarget).attr("data-id");
    console.log(postID);
    await fetch(`/api/post/${postID}`,{
        method:'POST',
    })
    location.replace("/select")
}



showPost.on("click", ".blog_post", viewPost);