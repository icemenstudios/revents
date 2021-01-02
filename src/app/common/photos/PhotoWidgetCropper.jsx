import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";



export default function PhotoWidgetCropper({ setImage, imagePreview }) {
  
  //const cropper = useRef(null);
  const cropperRef = useRef(null);
  const imageElement = cropperRef?.current;
  const cropper = imageElement?.cropper;

  function cropImage() {
    if (typeof cropper?.getCroppedCanvas() === "undefined") {
      return;
    }
    console.log(cropper)
    cropper.getCroppedCanvas().toBlob(blob => {
      setImage(blob);
    }, "image/jpeg");
  }
  return (
    <Cropper
      ref={cropperRef}
      src={imagePreview}
      style={{ height: 200, width: "100%" }}
      // Cropper.js options
      initialAspectRatio={1}
      preview=".img-preview"
      guides={false}
      viewMode={1}
      dragMode="move"
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={cropImage}
    />
  );
}
