import React from "react";
// import imagecard from "../assets/image-card.png";
// import bed from "../assets/Bed.svg";

export default function AdressCard({ adresses, filtre }) {
  // console.log(adresses);
  const adressesFiltrees = adresses.filter((adresse) =>
    adresse.attributes.Nom?.Nom.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <>
      {filtre !== ""
        ? adressesFiltrees.map((adresse) => (
            <div className="Card m-5 p-2 w-64" key={adresse.id}>
              <div className="Image">
                <img
                  className="w-full p-2"
                  src={`http://localhost:1337${adresse.attributes.cover_img?.data?.attributes?.url}`}
                  alt=""
                />
              </div>
              <div className="Info flex-col justify-start items-start flex">
                <div className=" w-full justify-between items-start inline-flex">
                  <div className=" ">
                    <div className="text-zinc-700 text-lg font-bold leading-normal">
                      {adresse.attributes.Nom}
                    </div>
                  </div>
                  <div className="">
                    <div className="text-right text-orange-500 text-lg font-extrabold leading-normal">
                      {adresse.attributes.Prix_moyen}
                    </div>
                    <div className="text-right text-gray-400 text-xs font-medium leading-3">
                      budget moyen
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  {adresse.attributes.Categorie && (
                    <img
                      src={`src/assets/${adresse.attributes.Categorie}.svg`}
                      alt=""
                      className=""
                    />
                  )}
                  <p className="">{adresse.attributes.Categorie}</p>
                </div>
              </div>
            </div>
          ))
        : adresses.data.map((adresse) => (
            <div className="Card m-5 p-2 w-64" key={adresse.id}>
              <div className="Image">
                <img
                  className="w-full p-2"
                  src={`http://localhost:1337${adresse.attributes.cover_img?.data?.attributes?.url}`}
                  alt=""
                />
              </div>
              <div className="Info flex-col justify-start items-start flex">
                <div className=" w-full justify-between items-start inline-flex">
                  <div className=" ">
                    <div className="text-zinc-700 text-lg font-bold leading-normal">
                      {adresse.attributes.Nom}
                    </div>
                  </div>
                  <div className="">
                    <div className="text-right text-orange-500 text-lg font-extrabold leading-normal">
                      {adresse.attributes.Prix_moyen}
                    </div>
                    <div className="text-right text-gray-400 text-xs font-medium leading-3">
                      budget moyen
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  {adresse.attributes.Categorie && (
                    <img
                      src={`src/assets/${adresse.attributes.Categorie}.svg`}
                      alt=""
                      className=""
                    />
                  )}
                  <p className="">{adresse.attributes.Categorie}</p>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}
