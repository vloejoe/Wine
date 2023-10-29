import { useState } from "react";
import AdressCard from "./components/AdressCard";
import useFetch from "./hooks/useFetch";

function App() {
  const [filtre, setFiltre] = useState("");

  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/adresses?populate=deep"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <main className="h-screen flex bg-slate-100 p-5">
      <div>
        <h2 className="">Évènement</h2>
        <ul>
          <li className="text-xl font-semibold">Akanda</li>
        </ul>
      </div>
      <div className="px-4 w-5/6">
        <input
          className="w-full "
          type="text"
          placeholder="Rechercher..."
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        ></input>
        <div className="flex gap-3 my-2 ">
          <div>Meilleurs</div>
          <div>Populaire</div>
          <div>Nouveau</div>
          <div>Budget</div>
        </div>
        <div
          className="grid 
                        lg:grid-cols-3 
                        md:grid-cols-3 md:gap-4 
                        grid-flow-row gap-2 
                        "
        >
          <AdressCard adresses={data ? data : ""} filtre={filtre} />
        </div>
      </div>
      <div className="w-8 mx-auto">
        <div className="w-10 h-10 justify-start items-start gap-2.5 inline-flex">
          <div className="absolute w-2 h-2 bg-rose-400 rounded-full border border-gray-50"></div>
          <img
            src="public/images/profile.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
