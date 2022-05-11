const blogPost = document.querySelector(".blog_post");
const commentList = document.querySelector("#comments-scroll");

const getBlogPost = async () =>{
    const response = await fetch('api/post',{
        method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    addPost(data);
}

const addPost = (post) => {
    const postItem = document.createElement("div");
    postItem.classList.add("blog_post");
    postItem.innerHTML = `<div class = "post_header"><div class = "post_title">${post.title}</div><div class = "user_info">${post.user.user_name}, Date: ${post.date}</div></div><div class = "post_body">${post.body}</div>`;
    const user = post.user.user_name;
    blogPost.append(postItem);
    const commentData = post.comments;
    commentData.forEach(element => {
        
        addComment(element, user);
    });
}

const addComment = (comment, user) => {
    const commentItem = document.createElement("div");
    commentItem.classList.add("blog_comment");
    commentItem.innerHTML = `<div class = "comment_body">${comment.user_comment}</div><div class = "comment_info">username: ${user} , Date: ${comment.date}</div>`;
    commentList.append(commentItem);
}

getBlogPost();



