import { useGetAlbum2 } from "@/hooks/api/json-test/useGetAlbum";

const AlbumList = () => {
  const { data: albumDatas } = useGetAlbum2();

  return (
    <>
      <div className="text-[40px] text-deep-orange">Album data</div>

      <ul className="flex flex-wrap w-full h-[800px]">
        {albumDatas.map((item: any, index: number) => (
          <li key={index} className="p-1">
            album:{item.id}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlbumList;
