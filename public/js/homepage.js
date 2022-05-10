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
    postItem.innerHTML = `<div class = "blog_post" data-id=${post.id}><span data-id=${post.id} class = "post_header"><div>${post.title}</div><div>By: ${post.user.user_name}, date: ${post.date}</div></span><span class = "post_body">${post.body}</span></div>`;
    blogPosts.append(postItem);
}

const viewPost = async (event) => {
    const postID = $(event.currentTarget).attr("data-id");
    console.log(postID);
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