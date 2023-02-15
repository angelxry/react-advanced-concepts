import { ImageListItem } from "components/ImageListItem/ImageListItem";
import "./ImageList.css";
export function ImageList({ imgList }) {
  return (
    <div>
      {imgList.map((img) => {
        return (
          <div key={img.id}>
            <ImageListItem img={img} />
          </div>
        );
      })}
    </div>
  );
}
