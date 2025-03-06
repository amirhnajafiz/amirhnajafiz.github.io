// all data of the webstie goes in this big object
var posts = {
  "blogs": [
    {
      "content": "This is my first blog post. I hope you like it.",
      "url": "my-first"
    },
    {
      "content": "This is my second blog post. I hope you like it.",
      "url": "my-first"
    }
  ],
  "projects": [
    {
      "content": "This is my first project. I hope you like it.",
      "url": "my-first"
    },
    {
      "content": "This is my second project. I hope you like it.",
      "url": "my-first"
    }
  ]
};

// use jQuery to place the data in the HTML
$(document).ready(function() {
    // loop through the blog posts and add them to the blog section
    for (var i = 0; i < posts.blogs.length; i++) {
        var blog = posts.blogs[i];
        var blogHTML = '<div class="blog-post">';
        blogHTML += '<span>' + blog.content + ' <a href="' + blog.url + '">' + blog.url + '</a></span>';
        blogHTML += '</div>';
        $('#blogs').append(blogHTML);
    }

    // loop through the projects and add them to the projects section
    for (var i = 0; i < posts.projects.length; i++) {
        var project = posts.projects[i];
        var projectHTML = '<div class="blog-post">';
        projectHTML += '<span>' + project.content + ' <a href="' + project.url + '">' + project.url + '</a></span>';
        projectHTML += '</div>';
        $('#projects').append(projectHTML);
    }
});