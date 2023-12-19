import UploadForm from '../Forms/UploadForm/UploadForm';
import UploadCard from '@/components/Cards/UploadCard/UploadCard';
import getServerUser from '@/lib/getServerUser';

const Upload = async () => {

const user = await getServerUser()
  return (
    <div>
      <UploadForm />

    </div>
  );
};

export default Upload;
