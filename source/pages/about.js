import { html, define } from "hybrids";

export const AboutPage = {
  render: () => html`
    <div>
      <h1>About Page</h1>
      <simple-counter count="0"></simple-counter>
    </div>
  `,
};

define("page-about", AboutPage);
