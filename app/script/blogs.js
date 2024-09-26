// global books object
let blogsTemplate = `
<div class="px-4">
    <div class="h5" style="text-align: justify;">
        {{title}}
    </div>
    <div style="display: flex; flex-direction: column;">
        <small class="py-2"><i class="{{platform}}" style="font-size: 24px; margin-right: 10px;"></i><a href="{{access}}">View on {{platform_name}}</a></small>
        <p style="text-align: justify;" class="py-2">
            {{summary}}
        </p>
    </div>
</div>
`;

const blogs = [
  {
    title: "EMQX v5: Under Magnifier",
    platform: "fa fa-medium",
    platform_name: "Medium",
    summary:
      "Whether you have been using EMQX for many years, are just hearing about it for the first time, or are required to use it by your managers, it is useful to learn about the new architecture of EMQX (also known as EMQX v5). Regardless of whether you currently use EMQX, the concepts in this new version can provide valuable insights for designing your distributed applications. In this story, I will explore EMQX v5 to examine its new architecture. By comparing it to EMQX v4, we will highlight its benefits.",
    access:
      "https://medium.com/@amirhossein-najafizadeh/emqx-v5-under-magnifier-ad4f6e0b8932",
  },
];

// global rendering functions
function renderBlogs() {
  let holder = document.getElementById("blogs-holder");

  blogs.forEach((blog) => {
    let element = blogsTemplate;

    element = element.replace("{{title}}", blog.title);
    element = element.replace("{{summary}}", blog.summary);
    element = element.replace("{{platform}}", blog.platform);
    element = element.replace("{{platform_name}}", blog.platform_name);
    element = element.replace("{{access}}", blog.access);

    let hl = document.createElement("div");
    hl.classList.add("mb-5");
    hl.classList.add("border-bottom");
    hl.innerHTML = element;

    holder.appendChild(hl);
  });
}
