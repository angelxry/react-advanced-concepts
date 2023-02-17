import { useEffect, useState } from "react";
import { ImageList } from "./components/ImageList/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";
export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // [x] Store the page number to fetch

  // [x] Create a function request to fetch 5 others images (using the page to fetch)
  // [x] Add the new images in imageList

  // [x] Listen to pageToFetch updates and request new images, when it changes

  // [x] Create a function to increase the page to fetch number

  // [x] Increase the page number when reaching the bottom of the screen

  // [] Display a spinner while a request is loading

  useEffect(() => {
    fetchImagesByPage(pageToFetch);
  }, [pageToFetch]);

  useEffect(() => {
    if (isBottom) {
      console.log("Increase page");
      increasePage();
    }
  }, [isBottom]);
  async function fetchImagesByPage(pageNumber) {
    console.log("http req...");
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  function increasePage() {
    setPageToFetch(pageToFetch + 1);
  }

  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  );
}
