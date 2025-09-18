import Image from "next/image";
import nextImage from '../../assets/Screenshot.png'

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center"> Image Optimzation</h1>

      <h1 className="text-3xl text-center">Regular Image tag</h1>
      <img
        src="https://i.ibb.co.com/fG2jjsbN/0221d67b-88f5-4109-bf43-8e1f82b5f7ca.jpg"
        alt="Image Optimzation"
         width={500}
        height={500}
        className="mx-auto"
      />

      <h1 className="text-3xl text-center py-1 my-1">Next Image tag</h1>
      <Image
        src="https://i.ibb.co.com/fG2jjsbN/0221d67b-88f5-4109-bf43-8e1f82b5f7ca.jpg"
        alt="Image Optimzation"
        width={500}
        height={500}
        // fill={true}
        className="mx-auto"
      />
      <h1 className="text-3xl text-center py-1 my-1">Local Image tag</h1>
      <Image
        src={nextImage}
        alt="Image Optimzation"
        width={500}
        height={500}
        // fill={true}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
