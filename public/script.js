// animasi hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
  const hamburgerMid = document.getElementById("hamburger-mid");
  const navDesktop = document.getElementById("navigasiDesktop");

  hamburgerMid.classList.toggle("translate-x-[13px]");
  navDesktop.classList.toggle("translate-x-[100%]");
});

window.addEventListener("scroll", function () {
  // scroll navbar
  const navbar = document.getElementById("navbar");

  const scrollY = window.pageYOffset;
  const screenPhone = window.innerWidth;

  if (scrollY > 0) {
    navbar.classList.add("shadow-md", "shadow-black");
  } else {
    navbar.classList.remove("shadow-md", "shadow-black");
  }

  // scroll contact
  const contactA = document.getElementById("contact-a");
  const contactB = document.getElementById("contact-b");
  const contactC = document.getElementById("contact-c");
  const contactD = document.getElementById("contact-d");

  if (screenPhone >= 768) {
    if (scrollY > 1930) {
      contactA.classList.remove("-translate-y-28");
      contactB.classList.remove("-translate-y-36");
      contactC.classList.remove("translate-y-40");
      contactD.classList.remove("translate-y-32");
    } else if (scrollY < 1930) {
      contactA.classList.add("-translate-y-28");
      contactB.classList.add("-translate-y-36");
      contactC.classList.add("translate-y-40");
      contactD.classList.add("translate-y-32");
    }
  } else {
    if (scrollY > 2605) {
      contactA.classList.remove("-translate-y-28");
      contactB.classList.remove("-translate-y-36");
      contactC.classList.remove("translate-y-40");
      contactD.classList.remove("translate-y-32");
    } else if (scrollY < 2605) {
      contactA.classList.add("-translate-y-28");
      contactB.classList.add("-translate-y-36");
      contactC.classList.add("translate-y-40");
      contactD.classList.add("translate-y-32");
    }
  }
});

// // DOM menu
// const menuFullstack = document.getElementById("menu-fullstack");
// const menuFrontend = document.getElementById("menu-frontend");
// const menuBackend = document.getElementById("menu-backend");
// const menuUiux = document.getElementById("menu-uiux");
// const menuAndroid = document.getElementById("menu-android");

// /* menu in keranjang */
// const fullstackDev = document.getElementById("fullstack-dev");
// fullstackDev.addEventListener("click", function () {
// });

// const frontendDev = document.getElementById("frontend-dev");
// frontendDev.addEventListener("click", function () {
//   const frontDatas = {
//     values: "Frontend Dev",
//     type: true,
//   };

//   dbKeranjang.push(frontDatas);
// });

// const backendDev = document.getElementById("backend-dev");
// backendDev.addEventListener("click", function () {
//   const backDatas = {
//     values: "Backend Dev",
//     type: true,
//   };

//   dbKeranjang.push(backDatas);
// });

// const uiUx = document.getElementById("uiux");
// uiUx.addEventListener("click", function () {
//   const uiDatas = {
//     values: "UI / UX",
//     type: true,
//   };

//   dbKeranjang.push(uiDatas);
// });

// const androidDev = document.getElementById("android-dev");
// androidDev.addEventListener("click", function () {
//   const androidDatas = {
//     values: "Android Dev",
//     type: true,
//   };

//   dbKeranjang.push(androidDatas);
// });
