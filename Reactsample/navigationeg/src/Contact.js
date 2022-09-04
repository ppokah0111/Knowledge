import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
      <p>This is our address</p>
      <ul>
        <li>
          <Link to={`email`}>Email</Link>
        </li>
        <li>
          <Link to={`address`}>Address</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
