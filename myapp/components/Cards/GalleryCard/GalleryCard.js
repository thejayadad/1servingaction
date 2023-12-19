import getServerUser from '@/lib/getServerUser';
import Link from 'next/link';
import { Types } from 'mongoose';
import { FiHeart, FiEdit, FiTrash, FiEye } from 'react-icons/fi';


const GalleryCard = ({ imageUrl, title, desc, index, isFavorite, isCurrentUser, creator: { _id: creatorId, avatar: creatorAvatar, email: creatorEmail }, postUserId }) => {
  const user = getServerUser();
  const userId = user ? new Types.ObjectId(user._id) : undefined;
  const creatorID = creatorId ? new Types.ObjectId(creatorId) : undefined; // Assuming the creator object has an _id property

  console.log("First Session " + user)
  console.log(creatorEmail)
  console.log(creatorId)
  console.log("UserID: ", userId);
  console.log("ImageUrl: ", imageUrl);
  console.log("CreatorID: ", creatorID);
  console.log("CreatorAvatar: ", creatorAvatar);

  const renderHeartIcon = () => {
    if (isFavorite) {
      return <Fi    Heart size={20} style={{ color: 'red' }} />;
    } else {
      return <FiHeart size={20} />;
    }
  };



  return (
    <Link href={`/`}>
<div
  key={index}
  className='relative group bg-primary h-96 overflow-hidden rounded-md transition-transform transform hover:scale-105'
>
  <img src={imageUrl} className='h-full' />
  <div className='dark-overlay absolute top-0 left-0 right-0 bottom-0'></div> {/* Dark overlay */}
  <div className='text-white absolute top-0 left-0 right-0 p-4 flex justify-center gap-8 items-center opacity-0 group-hover:opacity-100 transition-opacity'>
  <FiHeart size={20} />
  <FiEye size={20} />

</div>

  <div className='absolute bottom-0 left-0 right-0 p-4 flex items-end opacity-0 group-hover:opacity-100 transition-opacity'>
    <div className='mr-2'>
      <img src={creatorAvatar} alt='Profile' className='w-8 h-8 rounded-full' />
    </div>
    <div>
      <p className='text-white font-semibold'>{title}</p>
    </div>
  </div>
</div>

    </Link>
  );
};

export default GalleryCard;
