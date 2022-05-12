const updateBtn = $("#updateBtn");

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

const updatePost = async (event) => {
    const title = document.querySelector(`#titleInput`).value.trim();
    const body = document.querySelector(`#blogContent`).value.trim();
    if(title && body){
    const response = await fetch(`api/post/update`,{
        method: 'PUT',
        body: JSON.stringify({body,title}),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        location.replace("/dashboard")
    }else{
        console.log("could not update");
    }
    }else{
        console.log("update failed, fill in both title and body");
    }
}

updateBtn.on("click", updatePost)
getBlogPost();