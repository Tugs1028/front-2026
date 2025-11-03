import React, { useEffect, useState } from "react"; // React-s useEffect, useState hook-uudiig importolj bn

export default function Page() {
  // page uusgej bn
  const [data, setData] = useState(); // data nertei state zrljin api aas ireh medelliig haruulna

  useEffect(() => {
    useEffect; // huudas acaalalh uyd api duudah useEffect
    const fetchData = async () => {
      // async funkts todorhiolj, ugugdul tataj bn
      try {
        const response = await fetch(
          "https.mongol.api.com" // api ruu huselt ilgeej bn
        );
        const json = await response.json(); // api iig json blgj bn
        setData(json.items); // api iig state der hdgalj bn
      } catch (error) {
        console.error("Error fetching data:", error); //aldaa grvl console dr ingj hrgdn
      }
    };
    fetchData(); // fetch data funktsiig ajilluulj bn
  }, []);

  return (
    // return hiij api iin utgiig haruulj bas butsaaj bn
    <div classname="min-h-screen bg-gray-500 p-8">
      <h1 classname="text-4xl font-bold text-center mb-8 text-orange-600">
        Mongolapi
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {data.map(
          (
            item // buteegdehuuniig maplaj haruulj bas style hiij bln
          ) => (
            <div key={item.id} className="bg-white hover:shadow-xl transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
