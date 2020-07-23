const projectList = function (projectListItem) {
  this.projectListItem = projectListItem;

  this.init = function () {
    console.log(this.projectListItem);
  };
};

projectList.prototype.renderProjects = function () {
  console.log("Project Page");
  console.log("Function Called");
};

const projectItemArr = new projectList([
  {
    title: "title1",
    description: "desc1",
    link: "link1",
    image: "images/download.src",
  },
  {
    title: "title2",
    description: "desc2",
    link: "link2",
    image: "images/download.src",
  },
  {
    title: "title3",
    description: "desc3",
    link: "link3",
    image: "images/download.src",
  },
  {
    title: "title4",
    description: "desc4",
    link: "link4",
    image: "images/download.src",
  },
]);

projectItemArr.init();
projectItemArr.renderProjects();
