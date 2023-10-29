import AnimeList from "./components/AnimeList";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();
  return (
    <>
      <div className="flex justify-between items-center mx-2">
        <h1 className="p-4 text-1xl  sm:text-2xl font-bold mx-1 ">
          List Anime Popular
        </h1>
        <a
          href="/"
          className="py-2 px-2 sm:px-3 border bg-blue-400 border-blue-400 text-white text-1xl text-center rounded-full hover:ring-1 hover:ring-blue-500/20 hover:border-blue-500 hover:bg-blue-500 hover:ring-offset-1 shadow-sm"
        >
          Lihat Semua
        </a>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 mx-5 ">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl rounded">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
