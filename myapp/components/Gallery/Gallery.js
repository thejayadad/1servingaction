
import React from 'react';
import GalleryCard from '../Cards/GalleryCard/GalleryCard';
import { fetchPost, getPosts } from "@/lib/data";
import getServerUser from '@/lib/getServerUser';

const Gallery = async () => {
  const posts = await getPosts();
  const session = await getServerUser()
  return (
    <section className='px-4 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto max-w-screen-2xl'>
        {posts.map((post) => (
          <GalleryCard
            key={post._id}
            imageUrl={post.imageUrl}
            title={post.title}
            desc={post.desc}
            isFavorite={post.isFavorite}
            isCurrentUser={post.user === session?.user?.id}
            creator={post.creator}
            postUserId={post.user}
            userId={session?.user?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
