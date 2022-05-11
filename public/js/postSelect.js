const blogPost = document.querySelector(".blog_post");
const clearBlogPost = $(".blog_post")
const commentList = document.querySelector("#comments-scroll");
const clearComment = $("#comments-scroll");
const submitComment = $(".submit-comment");
const homepage = $(".homepage_btn");

const getBlogPost = async () =>{
    clearComment.children().remove();
    clearBlogPost.children().remove();
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
    commentList.prepend(commentItem);
}


const createComment = async () => {
    //event.preventDefault();
    // const date = new Date().toLocaleDateString();
    const comment = document.querySelector('#comment_input').value.trim();
    if (comment){
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log(response);
            document.querySelector('#comment_input').value = '';
            getBlogPost();
        } else {
            console.log('could not create post');
        }
    }else{
        console.log('please fill in Comment section');
    }
}

homepage.on("click", function(){
    document.location.replace('/')
});

submitComment.on("click", createComment)

getBlogPost();



