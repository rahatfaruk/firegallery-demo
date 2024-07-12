import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { fbDatabase } from "../../firebase.config";
import ImageBox from "./ImageBox";

function Gallery() {
  const [gallery, setGallery] = useState([])

  // get (realtime) all photos from database
  useEffect(() => {
    const cancelOnValue = onValue(ref(fbDatabase, 'images'), (snapshot) => {
      const data = []
      snapshot.forEach(childSnap => {
        data.push({ id: childSnap.key, ...childSnap.val() })
      })

      setGallery(data)
    })

    // clear effect
    return () => cancelOnValue()
  }, [])


  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Gallery:</h3>

      {gallery.length < 1 ?
        <p className="text-xl text-gray-500">Empty gallery! Start by uploading a photo!</p> :
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map(img => <ImageBox key={img.id} img={img} /> )}
        </div>
      }
    </div>
  );
}

export default Gallery;
