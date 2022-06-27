import React, { useState } from "react";
import galleryPic from "../assets/galleryPic.png";

export default function Gallery() {
  return (
    <>
      <div style={{ marginTop: "5em" }} className="gallery_container">
        <div className="product_container_heading">Gallery</div>
        <div className="gallery_row">
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
        </div>
      </div>
    </>
  );
}
