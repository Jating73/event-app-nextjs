import MainHeader from "./MainHeader";

function Layout(props) {
  return (
    <main>
      <MainHeader />
      <div>{props.children}</div>
    </main>
  );
}

export default Layout;
