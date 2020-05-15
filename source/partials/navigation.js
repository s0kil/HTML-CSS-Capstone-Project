import { html, define } from "hybrids";

export const Navigation = {
  render: () => html`
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  `,
};

define("partial-navigation", Navigation);
