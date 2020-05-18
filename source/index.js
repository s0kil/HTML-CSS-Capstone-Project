(async () => {
  const APPLICATION_ROUTES = {
    "/": "./pages/home.html",
    "/about": "./pages/about.html",
    "404": "./pages/404.html",
  };

  const requestedPath = window.location.pathname;
  const route = APPLICATION_ROUTES[requestedPath] || APPLICATION_ROUTES["404"];
  const routeHtml = await fetch(route).then((r) => r.text());

  window.addEventListener("DOMContentLoaded", () => {
    // Render Route HTML
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = routeHtml;
  });
})();
