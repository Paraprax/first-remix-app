import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/one">My Link 1</Link>
        </li>
        <li>
          <Link to="/two">My Link 2</Link>
        </li>
      </ul>
    </div>
  );
};