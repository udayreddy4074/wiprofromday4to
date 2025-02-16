import React, { useState } from "react";

// Import images correctly
import img1 from "./southzone.jpg";
import img2 from "./sz.jpg";
import img3 from "./sz1.jpg";
import img4 from "./winsz.jpg";

export default function ListImages() {
  const [showList, setShowList] = useState(false);

  // Array of images
  const images = [img1, img2, img3, img4];

  return (
    <div style={{ textAlign: "center", marginTop: "20px"}}>
      <h2>Image Gallery</h2>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide Images" : "Show Images"}
      </button>

      {showList && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {images.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <img src={item} alt={`Image ${index + 1}`} width="200" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
