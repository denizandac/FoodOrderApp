import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>My Food Order App</h1>
      </div>
      <nav>
        <button> My Cart (0) </button>
      </nav>
    </header>
  );
}
