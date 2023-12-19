import getServerUser from '@/lib/getServerUser';
import Link from 'next/link';
import { FaHeart, FaEdit, FaTrash } from 'react-icons/fa';
import { Types } from 'mongoose';

const GalleryCard = ({ imageUrl, title, desc, index, isFavorite, isCurrentUser, creator, postUserId }) => {
  const user = getServerUser();
  const userId = user ? new Types.ObjectId(user._id) : undefined;
  const creatorID = creator ? new Types.ObjectId(creator._id) : undefined; // Assuming the creator object has an _id property
  const creatorAvatar = creator ? creator.avatar : ''; // Assuming the creator object has an avatar property

  console.log("UserID: ", userId);
  console.log("ImageUrl: ", imageUrl);
  console.log("CreatorID: ", creatorID);
  console.log("CreatorAvatar: ", creatorAvatar);

  const renderHeartIcon = () => {
    if (isFavorite) {
      return <FaHeart size={20} style={{ color: 'red' }} />;
    } else {
      return <FaHeart size={20} />;
    }
  };

  const renderEditDeleteIcons = () => {
    if (isCurrentUser && userId && creatorID && userId.equals(creatorID)) {
      return (
        <div className='flex justify-between w-full'>
          <button>{renderHeartIcon()}</button>
          <button><FaEdit size={20} /></button>
          <button><FaTrash size={20} /></button>
        </div>
      );
    } else {
      return <div>{renderHeartIcon()}</div>;
    }
  };

  return (
    <Link href={`/`}>
      <div
        key={index}
        className='relative group bg-primary h-96 overflow-hidden rounded-md transition-transform transform hover:scale-105'
      >
        <img src={imageUrl} className='h-full' />
        <div className='absolute top-0 left-0 right-0 p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity'>
          {renderEditDeleteIcons()}
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
