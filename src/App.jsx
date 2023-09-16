import { useEffect } from "react";
import { url } from "./fetch";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchQuote = async () => {
    const request = new Request(url, {
      method: "GET",
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
      contentType: "application/json",
    });

    try {
      const response = await fetch(request);
      const datafetch = await response.json();
      setData(datafetch[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <section className="grid place-items-center bg-gray-300/50 h-screen">
        <div
          id="quote-box"
          className="bg-[url(https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1083463234.1681973259&semt=sph)] p-6 rounded
           bg-cover text-white
          "
        >
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="3em"
              width="4em"
              className="text-white"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
            </svg>
          </span>
          <p id="text" className=" italic text-3xl w-[25rem]">
            {data?.quote}
          </p>

          <h4 className="text-right mt-2 font-semibold text-lg">
            {data?.author}
          </h4>

          <div className="flex justify-between items-center">
            <a href="" className="">
              {" "}
              <svg
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034a8.68 8.68 0 01-2.351.861c-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078a3.56 3.56 0 00-1.076 2.605c0 .309.039.585.117.819C8.806 9.096 6.26 7.82 4.254 5.364c-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388a3.623 3.623 0 002.115 1.291c-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841a3.652 3.652 0 002.152.743c-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038C4.696 18.753 6.585 19.3 8.675 19.3c2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974a10.77 10.77 0 001.172-4.892V8.34A7.788 7.788 0 0021 6.419a8.142 8.142 0 01-2.11.593z" />
              </svg>
            </a>

            <button
              onClick={fetchQuote}
              className="bg-stone-950 mt-5 p-2 rounded-lg "
            >
              New Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
