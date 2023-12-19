import React, { useRef } from 'react';
import { addPost } from '@/lib/actions';
import FormButton from '../../FormButton/FormButton';

const UploadForm = React.memo(() => {
  const formRef = useRef();
  const imageRef = useRef();

//   const handleImageChange = (event) => {
//     const file = event.target;

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         imageRef.current.src = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  return (
    <form
      className='flex flex-col'
      action={addPost}
      ref={formRef}
    >
      <input
        type='text'
        name='imageUrl'
        placeholder='Image'
        required
      />
      {/* <img
        ref={imageRef}
        alt='Image Preview'
        style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
      /> */}
     <input
        type='text'
        name='title'
        placeholder='Title...'
        required
      />

      <input
        type='text'
        name='desc'
        placeholder='Description...'
        required
      />

      <label>Public:</label>
      {/* <div>
        <label>
          <input
            type='radio'
            name='draft'
            value='true'
          />
          Yes
        </label>
        <label>
          <input
            type='radio'
            name='draft'
            value='false'
          />
          No
        </label>
      </div> */}
      
      <input
        type='text'
        name='draft'
        placeholder='Draft...'
        required
      />
 
      <FormButton />
    </form>
  );
});

export default UploadForm;
