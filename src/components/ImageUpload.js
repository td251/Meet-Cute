// src/components/ImageUpload.js
import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onUpload }) => {
  const onDrop = (acceptedFiles) => {
    onUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      <p>Drag & drop up to 4 images here, or click to select</p>
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ImageUpload;
