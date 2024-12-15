// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://www.instagram.com/javoh1r20_08" target="_blank">
          Instagram
        </a>{" "}
        |
        <a href="https://github.com/javohirbackendDeveloper" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
