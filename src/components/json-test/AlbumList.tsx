import { useGetAlbum } from "@/hooks/api/json-test/useGetAlbum";
import Loading from "@/shared/layout/Loading";

const AlbumList = () => {
  const { data: AlbumData, isLoading } = useGetAlbum();

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="text-[40px] text-deep-orange">Album data</div>

      <ul className="flex flex-wrap w-full h-[800px]">
        {AlbumData.map((item: any, index: number) => (
          <li key={index} className="p-1">
            album:{item.id}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlbumList;
