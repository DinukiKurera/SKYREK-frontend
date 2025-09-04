import { useState } from "react";

export default function ImageSlider({ images = [] }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Ensure each image has a leading "/" so React can find it in /public
    const formattedImages = images.map(img =>
        img.startsWith("/") ? img : "/" + img
    );

    return (
        <div className="w-[400px] h-[500px]">
            <img
                src={formattedImages[activeImageIndex]}
                alt="Product"
                className="w-full h-[400px] object-cover"
            />
            <div className="w-full h-[100px] flex flex-row items-center justify-center gap-[2px]">
                {formattedImages.map((image, index) => (
                    <img
                        src={image}
                        alt={`Thumbnail ${index}`}
                        key={index}
                        className={
                            "w-[90px] h-[90px] object-cover cursor-pointer " +
                            (activeImageIndex === index ? "border-[5px]" : "")
                        }
                        onClick={() => setActiveImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
