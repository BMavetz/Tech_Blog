const newPost = $(".new-post");

newPost.on("click", function(){
    console.log("new post");
    document.location.replace('/post')
} );