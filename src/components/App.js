import logo from '../logo.svg';
import '../App.css';
import { ApplicationPage, Header, Footer, HomePage, NavBar, OwnerPage, PetPage } from '../modules';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <ApplicationPage></ApplicationPage>
      <PetPage></PetPage>
      <OwnerPage></OwnerPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
