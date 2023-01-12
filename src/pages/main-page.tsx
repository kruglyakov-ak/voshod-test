import BlocksList from "../components/blocks-list/blocks-list";
import logo from "../assets/img/logo.svg";

function MainPage(): JSX.Element {
  return (
    <main>
      <div className="main-logo-wrapper">
        <img
          className="main-logo"
          src={logo}
          alt="logo"
          width={395}
          height={196}
        />
      </div>
      <BlocksList />
    </main>
  );
}

export default MainPage;
