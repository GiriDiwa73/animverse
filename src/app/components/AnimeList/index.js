import Image from "next/image";
const AnimeList = ({ title, images }) => {
  return (
    <div className="bg-indigo-500">
      <Image src={images} width={600} height={400} alt="" />
      <h3> {title} </h3>
    </div>
  );
};
export default AnimeList;
