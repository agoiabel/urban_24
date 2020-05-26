import React, { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { IoMdClose, IoMdCloudDone } from 'react-icons/io'
import uploadIcon from '../../images/cloud-upload.svg'
import styles from './FileUploader.module.scss';

function Basic(props) {
  const [myFiles, setMyFiles] = useState([]);
  
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 5 || myFiles.length > 4) {
        alert('Maximum reached');
        return;
    }

    setMyFiles([...myFiles, ...acceptedFiles.map(file => {      
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    })]);
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    maxSize: 4194304,
    onDrop,
  });

  const removeFile = file => () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const removeAll = () => {
    setMyFiles([]);
  }

  React.useEffect(() => {
    props.setFiles(myFiles);
  }, [myFiles]);

  const files = myFiles.map(file => (
      <div className={styles.thumbnail} key={file.path}>
          <img src={file.preview} />
          <div className={styles.remove_thumbnail} onClick={removeFile(file)}>
            <IoMdClose color="#000" size={18} />
          </div>
      </div>
  ));

  return (
    <section className="container text-center">
      {files.length > 0 ? (
        <React.Fragment>
          <div className="flex-center">
            <IoMdCloudDone color="#099330" size={50} style={{ marginRight: '0.75rem' }} />
            <h4 className="color-gray">Photos uploaded successfully.</h4>
          </div>

          <aside className={styles.thumbs_container}>
            <aside className={styles.thumbnails}>
              {files}
            </aside>
            <div className={styles.remove_all} onClick={removeAll}>
              <IoMdClose color="#000" size={30} />
            </div>
          </aside>
          
        </React.Fragment>
        
      ) : (
        <React.Fragment>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <img src={uploadIcon} alt="Urban24 media upload" />
            <h4>Click here to upload your photos</h4>
          </div>

          <aside className={styles.uploader_text}>
            <p className="text--md">
              Max of 5 photos not larger than 4mb each may be uploaded.
            </p>
            <p className="text--md">
              Only .jpg and .png formats are acceptable.
            </p>
          </aside>
        </React.Fragment>
      )}
    </section>
  )
}

export default Basic;