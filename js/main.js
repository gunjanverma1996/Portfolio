/* Defining a class and initializing constructor*/
const NavigationMenu = function (
  navItems,
  navItemIcon,
  getItemDetails,
  profileImg,
  username,
  designaton
) {
  this.navItems = navItems;
  this.navItemIcon = navItemIcon;
  this.getItemDetails = getItemDetails;
  this.profileImg = profileImg;
  this.username = username;
  this.designaton = designaton;
  this.init = function () {
    var menuBar = "";
    for (let i = 1; i <= 3; i++) {
      menuBar += `<div id = "bar${i}"></div>`;
    }
    const menu = `<div id = "menu_bar">
                  ${menuBar}
                </div>`;
    document.querySelector("#menu").insertAdjacentHTML("beforeend", menu);
  };
};

NavigationMenu.prototype.sideNavMenuBar = function () {
  var self = this;
  document.querySelector(".container-fluid").classList.remove("main-tab");
  menu.nextElementSibling.classList.add("main-tab");
  const icon = document.querySelector("#menu_bar");
  icon.style.cssText = "display : none";

  const name = function () {
    const logo = `<div id = "logo">
                    <a id = "name" class = "text-center w-100">${self.username}</a>
                    <a class = "close">x</a>
                </div>`;
    return logo;
  };
  const profile = function () {
    const img = `<div class = "profile">
                  <img src = "${self.profileImg}" class ="img-size img-fluid" width = "130" height = "110">
                </div>`;
    return img;
  };
  const desig = function () {
    const profiledesig = `<div class = "row m-0 p-0 d-flex" id="userDesignation">
                            <h6 class = "developer mt-4">${self.designaton}</h6>
                          </div>`;
    return profiledesig;
  };
  const listing = function () {
    let navItemList = "";
    console.log(self.getItemDetails);
    navItemList += self.navItems
      .map((item, index) => {
        return `<li class = "p-1" onclick="${self.getItemDetails[index]}()">
          <i class="${self.navItemIcon[index]}" aria-hidden="true" style="font-size:20px; margin: 3% 17% 0% 8%;"></i>
          <a href='#'>${item}</a>
        </li>`;
      })
      .join("");
    const listItem = `<ul class ="headers">${navItemList}</ul>`;
    return listItem;
  };
  const sideNav = function () {
    const sideNavMenu = `<div class = "side-nav" >
                          ${name()}
                          ${profile()}
                          ${desig()}
                          ${listing()}
                        </div>`;
    document
      .querySelector("#menu")
      .insertAdjacentHTML("beforeend", sideNavMenu);
  };
  sideNav();
  document.querySelector(".close").addEventListener("click", function () {
    menu.nextElementSibling.classList.remove("main-tab");
    document.querySelector(".container-fluid").classList.add("main-tab");
    icon.style.cssText = "display: block";
    icon.nextElementSibling.outerHTML = "";
  });
};

var deviceName;
NavigationMenu.prototype.getDeviceName = function () {
  console.log("window width : " + window.innerWidth);
  if (window.innerWidth >= 769) {
    deviceName = "Desktop";
    document.querySelector("#menu_bar").addEventListener("click", function () {
      GunjanPortfolioMenu.sideNavMenuBar();
    });
  } else {
    deviceName = "Mobile";
    GunjanPortfolioMenu.renderMenuForMobile();
  }
};

NavigationMenu.prototype.renderMenuForMobile = function () {
  document.querySelector(".container-fluid").classList.remove("main-tab");
  menu.nextElementSibling.classList.add("main-tab");
  console.log(GunjanPortfolioMenu);
  const userProfileImg = `<div class="m-profile">
                            <img src="${GunjanPortfolioMenu.profileImg}" class="img-size img-fluid" width="40" height="50">
                          </div>`;
  document
    .querySelector(".sec2")
    .insertAdjacentHTML("afterend", userProfileImg);
  document.querySelector("#menu_bar").addEventListener("click", function () {
    GunjanPortfolioMenu.sideNavMenuBar();
    $(".headers").addClass("align-center-flex");
    document.querySelector(".close").addEventListener("click", function () {
      document.querySelector(".container-fluid").classList.remove("main-tab");
      menu.nextElementSibling.classList.add("main-tab");
    });
  });
};

const GunjanPortfolioMenu = new NavigationMenu(
  ["Profile", "Projects", "Contact"],
  ["fa fa-user", "fa fa-share-alt-square", "fa fa-file-code-o"],
  ["getProfile", "getProjects", "getContact"],
  "images/ME2.jpg",
  "Gunjan Verma",
  "Software Developer"
);

GunjanPortfolioMenu.init();

window.addEventListener("onload", GunjanPortfolioMenu.getDeviceName());
console.log(deviceName);

getProjects = () => {
  let projectScript = document.createElement("script");
  projectScript.src = "js/projects.js";
  projectScript.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(projectScript);
};

getContact = () => {
  let projectScript = document.createElement("script");
  projectScript.src = "js/contact.js";
  projectScript.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(projectScript);
};
