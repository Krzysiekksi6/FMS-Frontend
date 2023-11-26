import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <h1>Welcome, Landing page</h1>
      <Link to={'login'}>Logowanie</Link>
      <Link to={'register'}>Rejestracja</Link>
    </main>
  );
};

export default Layout;
