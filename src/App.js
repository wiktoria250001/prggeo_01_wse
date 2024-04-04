import logo from "./logo.svg";
import "./App.css";

const lista_uzytkownikow = [
  { imie: "Wiktoria" },
  { imie: "Monika" },
  { imie: "Tomasz" },
  { imie: "Marek" },
];
console.log(lista_uzytkownikow);

function App() {
  return (
    <div className="App">
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
