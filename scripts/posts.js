// all data of the webstie goes in this big object
var posts = {
  "papers": [
    {
      "content": "(A.H.Najafizadeh, Dr. S.A.Javadi) We propose a method to bypass low-priority tasks in Golang channel queues, improving upon the default FCFS behavior, and compare it with standard Golang channels.",
      "url": "https://www.researchgate.net/publication/373271512_Jump_over_Golang_channels"
    }
  ],
  "blogs": [
    {
      "content": "IPFS: Manage data without a central server",
      "url": "https://amirhossein-najafizadeh.medium.com/ipfs-manage-data-without-a-central-server-b32334f94a39"
    },
    {
      "content": "Having your Kubernetes over NFS",
      "url": "https://medium.com/@amirhossein-najafizadeh/having-your-kubernetes-over-nfs-0510d5ed9b0b"
    },
    {
      "content": "EMQX v5: Under Magnifier",
      "url": "https://medium.com/@amirhossein-najafizadeh/emqx-v5-under-magnifier-ad4f6e0b8932"
    },
    {
      "content": "Benchmarking NATS JetStream Cluster: Hypothesis Testing for Enhancements",
      "url": "https://medium.com/@amirhossein-najafizadeh/benchmarking-nats-jetstream-cluster-hypothesis-testing-for-enhancements-4a500d11ce7b"
    },
    {
      "content": "Minio shared objects operator",
      "url": "https://medium.com/@amirhossein-najafizadeh/minio-shared-objects-operator-d4a718f40a0"
    },
    {
      "content": "Kubernetes Cron-jobs (Python)",
      "url": "https://medium.com/@amirhossein-najafizadeh/kubernetes-cron-jobs-python-6167135d5d8f"
    }
  ],
  "projects": [
    {
      "content": "Penetration Testing as a Service, automated penetaion testing over cloud",
      "url": "https://github.com/ptaas-tool"
    },
    {
      "content": "Stallion; Fast message broker implemented with Golang.",
      "url": "https://github.com/official-stallion/stallion"
    }
  ]
};

// use jQuery to place the data in the HTML
$(document).ready(function() {
    // loop through the papers posts and add them to the blog section
      for (var i = 0; i < posts.papers.length; i++) {
        var paper = posts.papers[i];
        var blogHTML = '<div class="blog-post">';
        blogHTML += '<span>' + paper.content + ' <a href="' + paper.url + '">' + paper.url + '</a></span>';
        blogHTML += '</div>';
        $('#papers').append(blogHTML);
    }

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
