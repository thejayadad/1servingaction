


import GalleryCard from "@/components/Cards/GalleryCard/GalleryCard";
import Gallery from "@/components/Gallery/Gallery";
import  { getPosts} from "@/lib/data";

const Home = async () => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const posts  = await fetchPost(q, page);
  const posts = await getPosts()
  return (
    <main>
      homePage
    <Gallery />
    </main>
  )
}

export default Home
