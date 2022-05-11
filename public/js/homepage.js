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
    blogPosts.append(postItem);
}

const viewPost = async (event) => {
    const postID = $(event.currentTarget).attr("data-id");
    console.log(postID);
    await fetch(`/api/post/${postID}`,{
        method:'POST',
    })
    location.replace("/select")
    // const newAmount = document.querySelector(`#amount-${dataID}`).value.trim();
    // const response = await fetch(`api/request/${dataID}`,{
    //     method: 'PUT',
    //     body: JSON.stringify({amount: newAmount}),
    //     headers: { 'Content-Type': 'application/json' },
    // })
    // if (response.ok) {
    //     editDelMessage.innerHTML = 'Requested amount successfully updated.';
    //     showUpdatedReq(dataID);
    //     startTimer();
    // }else{
    //     editDelMessage.innerHTML = 'ERROR: cannot update when amount field is empty.'
    //     startTimer();
    //     console.log("could not update");
    // }
}



showPost.on("click", ".blog_post", viewPost);