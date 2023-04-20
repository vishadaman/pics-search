import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
    const renderImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })

    return <div className="img-list">
        {images.length ? renderImages : "no search found"}
    </div>
}

export default ImageList;