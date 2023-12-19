


import Gallery from "@/components/Gallery/Gallery";
import  {fetchPost} from "@/lib/data";

const Home = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const posts  = await fetchPost(q, page);
  return (
    <main>
      homePage
      {Array.isArray(posts) ? (
        posts.map((post) => (
          <div key={post.id}>
            <span>{post.title}</span>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
      <Gallery />
    </main>
  )
}

export default Home
