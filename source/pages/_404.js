import { html, define } from "hybrids";

export const _404 = {
  render: () => html`
    <div>
      <h1>Page Not Found</h1>
      <a href="/">Go To Home Page</a>
    </div>
  `,
};

define("page-404", _404);
