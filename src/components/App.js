import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      "name": "Deepa",
      "email": "deepa@gmail.com",
    },

    {
      id: "2",
      "name": "Deepan Nagaraj",
      "email": "deepan@gmail.com",
    }

  ]


  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={ contacts } />
    </div>
  );
}

export default App;
