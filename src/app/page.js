import Link from "next/link";
import AnimeList from "./components/AnimeList";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  return (
    <>
      <div className="flex justify-between items-center mx-2">
        <h1 className="p-4 text-1xl  sm:text-2xl font-bold mx-1 ">
          List Anime Popular
        </h1>
        <Link href="/populer" className="btn-see">
          Lihat Semua
        </Link>
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
