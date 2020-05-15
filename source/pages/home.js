import { html, define } from "hybrids";

export const HomePage = {
  render: () => html`
    <div>
      <h1>Home Page</h1>
      <simple-counter count="10"></simple-counter>
    </div>
  `,
};

define("page-home", HomePage);
