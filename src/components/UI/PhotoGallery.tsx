import { Gallery, Item } from 'react-photoswipe-gallery';
import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css';
import sora from '../../images/onlyme.jpg' ;
import sora1 from '../../images/sora1.jpg' ;
import sora2 from '../../images/sora2.jpg' ;
import sora3 from '../../images/sora3.jpg' ;
const images = [
  { src: sora, width: 1200, height: 800 },
  { src: sora1, width: 1200, height: 800 },
  { src: sora2, width: 1200, height: 800 },
  { src: sora3, width: 1200, height: 800 },
];

export const PhotoGallery = () => {
  return (
    <Gallery>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Item
              original={image.src}
              thumbnail={image.src}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref as any}
                  src={image.src}
                  className="w-full h-64 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  alt="Wedding gallery"
                />
              )}
            </Item>
          </motion.div>
        ))}
      </div>
    </Gallery>
  );
};