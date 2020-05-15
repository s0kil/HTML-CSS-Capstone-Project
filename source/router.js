const ROUTES = {
  "/about": () => import("./pages/about"),
  "/404": () => import("./pages/_404"),
  "/": () => import("./pages/home"),
};

const updatePageTitle = (element) => {
  const requestedTitle = element.content.querySelector("title");
  if (requestedTitle) document.title = requestedTitle.textContent;
};

const mountPage = (page) => {
  const applicationRoot = document.getElementById("root");
  updatePageTitle(page);
  applicationRoot.appendChild(page.content);
};

const loadPage = (page, callback) => page().then(() => callback());

const initializeRouter = () => {
  const path = window.location.pathname;
  if (ROUTES[path] === undefined) {
    loadPage(ROUTES["/404"], () => mountPage(document.getElementById("/404")));
  } else {
    loadPage(ROUTES[path], () => mountPage(document.getElementById(path)));
  }
};

window.addEventListener("DOMContentLoaded", initializeRouter);
