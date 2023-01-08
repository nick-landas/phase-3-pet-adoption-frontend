import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {
  ApplicationPage,
  Footer,
  HomePage,
  Contact,
  NavBar,
  OwnerPage,
  PetPage,
} from "../modules";
import { useState } from "react";

function App() {
  const [petList, updatePetList] = useState([]);
  const [applicationList, updateApplicationList] = useState([]);
  const [ownerList, updateOwnerList] = useState([]);

  return (
    <>
      {/* <Header></Header> */}
      <NavBar></NavBar>
      <HomePage></HomePage>
      <PetPage petList={petList} updateList={updatePetList}></PetPage>
      <OwnerPage lists={{ownerList, applicationList}} updaters={{updateOwnerList, updateApplicationList}}></OwnerPage>
      <ApplicationPage
        lists={{ petList, applicationList, ownerList }}
        updaters={{ updatePetList, updateApplicationList, updateOwnerList }}
      ></ApplicationPage>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
