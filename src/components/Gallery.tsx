import * as React from "react";
import { IImageList } from "../utils/types";

interface IGallery {
    images: Array<IImageList>;
}

const Gallery = ({ images }: IGallery) => {
    return (
        <div className="gallery">
            {images.map((item, idx) => {
                return <img key={idx} src={item.src} alt="" />;
            })}
        </div>
    );
};

export default Gallery;
