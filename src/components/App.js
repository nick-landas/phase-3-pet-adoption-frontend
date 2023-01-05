import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { ApplicationPage, Footer, HomePage, Contact, NavBar, OwnerPage, PetPage } from '../modules';

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <NavBar></NavBar>
      <HomePage></HomePage>
      <PetPage></PetPage>
      <OwnerPage></OwnerPage>
      <ApplicationPage></ApplicationPage>
      <Contact></Contact>
      <Footer></Footer>
  </>
  );
}

export default App;
