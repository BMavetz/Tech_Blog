const submitPost = $(".submit-post");

const createPost = async (event) => {
    event.preventDefault();
    const date = new Date().toLocaleDateString();
    const title = document.querySelector('#titleInput');
    const content = document.querySelector('#blogContent');
    if (title && content){
        const response = await fetch('/api/request', {
            method: 'POST',
            body: JSON.stringify({ content, title, date }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log(response)
            document.location.replace('/')
        } else {
            console.log('could not create post');
        }
    }else{
        console.log('please fill in both title and post body fields');
    }
}