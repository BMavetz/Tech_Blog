const publishPost = $(".publish-post");

const createPost = async () => {
    //event.preventDefault();
    const date = new Date().toLocaleDateString();
    const title = document.querySelector('#titleInput').value.trim();
    const content = document.querySelector('#blogContent').value.trim();
    if (title && content){
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ content, title, date}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log(response)
            document.location.replace('/dashboard')
        } else {
            console.log('could not create post');
        }
    }else{
        console.log('please fill in both title and post body fields');
    }
}

publishPost.on("click", createPost)
