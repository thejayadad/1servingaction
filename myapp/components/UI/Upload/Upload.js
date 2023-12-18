'use client'
import React, {useState} from 'react'
import UploadForm from '../Forms/UploadForm/UploadForm'

const Upload = () => {
    const [files, setFiles] = useState([])
  return (
    <div>
        <UploadForm setFiles={setFiles} />
    </div>
  )
}

export default Upload