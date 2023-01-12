import BlocksList from "../components/blocks-list/blocks-list";
import logo from "../assets/img/logo.svg"

function MainPage(): JSX.Element {
  return (
    <div>
      <img src={logo} alt="logo" />
      <BlocksList />
    </div>
  );
};

export default MainPage;
