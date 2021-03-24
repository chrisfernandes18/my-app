import React from "react"
import Gallery from 'react-photo-gallery';
import image1 from "./assets/costa_rica/2019/IMG_0003.JPG";
import image2 from "./assets/costa_rica/2019/IMG_0022.JPG";
import image3 from "./assets/costa_rica/2019/IMG_0080.JPG";
import image4 from "./assets/costa_rica/2019/IMG_0154.JPG";
import image5 from "./assets/costa_rica/2019/IMG_0176.JPG";
import image6 from "./assets/costa_rica/2019/IMG_0277.JPG";
import image7 from "./assets/costa_rica/2019/IMG_9732.JPG";
import image8 from "./assets/costa_rica/2019/IMG_9745.JPG";
import image9 from "./assets/costa_rica/2019/IMG_9793.JPG";
import image10 from "./assets/costa_rica/2019/IMG_9802.JPG";
import image11 from "./assets/costa_rica/2019/IMG_9805.JPG";
import image12 from "./assets/costa_rica/2019/IMG_9849.JPG";
import image13 from "./assets/costa_rica/2019/IMG_9985.JPG";
import image14 from "./assets/costa_rica/2018/IMG_0454.JPG";
import image15 from "./assets/costa_rica/2018/IMG_0581.JPG";
import image16 from "./assets/costa_rica/2018/IMG_0582.JPG";
import image17 from "./assets/costa_rica/2018/IMG_0588.JPG";
import image18 from "./assets/costa_rica/2018/IMG_0589.JPG";
import image19 from "./assets/costa_rica/2018/IMG_0603.JPG";
import image20 from "./assets/costa_rica/2018/IMG_0608.JPG";
import image21 from "./assets/costa_rica/2018/IMG_0704.JPG";
import image22 from "./assets/costa_rica/2018/IMG_0749.JPG";
import image23 from "./assets/costa_rica/2018/IMG_0803.JPG";
import image24 from "./assets/costa_rica/2018/IMG_0807.JPG";
import image25 from "./assets/costa_rica/2018/IMG_0850.JPG";
import image26 from "./assets/costa_rica/2018/IMG_0868.JPG";
import image27 from "./assets/eclipse/IMG_0086.JPG";
import image28 from "./assets/eclipse/IMG_0110.JPG";
import image29 from "./assets/eclipse/IMG_0090.JPG";
import image30 from "./assets/eclipse/IMG_0111.JPG";
import image31 from "./assets/eclipse/IMG_0114.JPG";
import image32 from "./assets/eclipse/IMG_0118.JPG";
import image33 from "./assets/japan/IMGP1555.JPG";
import image34 from "./assets/japan/IMGP1603.JPG";
import image35 from "./assets/japan/IMGP1617.JPG";
import image36 from "./assets/japan/IMGP1752.JPG";
import image37 from "./assets/japan/IMGP1817.JPG";
import image38 from "./assets/japan/IMGP1968.JPG";
import image39 from "./assets/japan/IMGP2028.JPG";
import image40 from "./assets/japan/IMGP1969.JPG";
import image41 from "./assets/japan/IMGP2007.JPG";
import image42 from "./assets/japan/IMGP2029.JPG";
import image43 from "./assets/japan/IMGP2118.JPG";
import image44 from "./assets/japan/IMGP2158.JPG";
import image45 from "./assets/japan/IMGP2201.JPG";
import image46 from "./assets/japan/IMGP2327.JPG";
import image47 from "./assets/japan/IMGP2331.JPG";
import image48 from "./assets/japan/IMGP2351.JPG";
import image49 from "./assets/japan/IMGP2402.JPG";
import image50 from "./assets/japan/IMGP2414.JPG";
import image51 from "./assets/japan/IMGP2415.JPG";
import image52 from "./assets/japan/IMGP2445.JPG";
import image53 from "./assets/japan/IMGP2453.JPG";
import image54 from "./assets/japan/IMGP2457.JPG";
import image55 from "./assets/japan/IMGP2503.JPG";
import image56 from "./assets/japan/IMGP2538.JPG";
import image57 from "./assets/japan/IMGP2539.JPG";
import image58 from "./assets/japan/IMGP2543.JPG";
import image59 from "./assets/japan/IMGP2548.JPG";
import image60 from "./assets/japan/IMGP2609.JPG";
import image61 from "./assets/japan/IMGP2613.JPG";
import image62 from "./assets/japan/IMGP2618.JPG";
import image63 from "./assets/japan/IMGP2621.JPG";
import image64 from "./assets/japan/IMGP2639.JPG";
import image65 from "./assets/japan/IMGP2716.JPG";
import image66 from "./assets/japan/IMGP2737.JPG";
import image67 from "./assets/japan/IMGP2796.JPG";
import image68 from "./assets/japan/IMGP2791.JPG";
import image69 from "./assets/japan/IMGP2794.JPG";
import image70 from "./assets/japan/IMGP2795.JPG";
import image71 from "./assets/japan/IMGP2870.JPG";
import image72 from "./assets/japan/IMGP2833.JPG";
import image73 from "./assets/japan/IMGP2871.JPG";
import image74 from "./assets/japan/IMGP3145.JPG";
import image75 from "./assets/japan/IMGP2928.JPG";
import image76 from "./assets/japan/IMGP3159.JPG";


function Photos(props) {
  return (
    <div className="photos">
      <h1>Photos</h1>
      <h2>Costa Rica</h2>
      <h3>July 2019</h3>
      <Gallery photos={costaricaPhotos19} />
      <h3>December 2018</h3>
      <Gallery photos={costaricaPhotos18} />
      <h2>Eclipse</h2>
      <h3>August 2017</h3>
      <Gallery photos={eclipsePhotos} />
      <h2>Japan</h2>
      <h3>July 2016</h3>
      <Gallery photos={japanPhotos} />
    </div>
  )
}

const w = 30;
const h = 20;

const costaricaPhotos19 = [
  {
    src: image1,
    width: w,
    height: h
  },
  {
    src: image2,
    width: w,
    height: h
  },
  {
    src: image3,
    width: w,
    height: h
  },
  {
    src: image4,
    width: w,
    height: h
  },
  {
    src: image5,
    width: w,
    height: h
  },
  {
    src: image6,
    width: w,
    height: h
  },
  {
    src: image7,
    width: w,
    height: h
  },
  {
    src: image8,
    width: w,
    height: h
  },
  {
    src: image9,
    width: w,
    height: h
  },
  {
    src: image10,
    width: w,
    height: h
  },
  {
    src: image11,
    width: w,
    height: h
  },
  {
    src: image12,
    width: w,
    height: h
  },
  {
    src: image13,
    width: w,
    height: h
  }
]


const costaricaPhotos18 = [
  {
    src: image14,
    width: w,
    height: h
  },
  {
    src: image15,
    width: w,
    height: h
  },
  {
    src: image16,
    width: w,
    height: h
  },
  {
    src: image17,
    width: w,
    height: h
  },
  {
    src: image18,
    width: w,
    height: h
  },
  {
    src: image19,
    width: w,
    height: h
  },
  {
    src: image20,
    width: w,
    height: h
  },
  {
    src: image21,
    width: w,
    height: h
  },
  {
    src: image22,
    width: w,
    height: h
  },
  {
    src: image23,
    width: w,
    height: h
  },
  {
    src: image24,
    width: w,
    height: h
  },
  {
    src: image25,
    width: w,
    height: h
  },
  {
    src: image26,
    width: w,
    height: h
  }
]



const eclipsePhotos = [
  {
    src: image27,
    width: w,
    height: h
  },
  {
    src: image28,
    width: w,
    height: h
  },
  {
    src: image29,
    width: w,
    height: h
  },
  {
    src: image30,
    width: w,
    height: h
  },
  {
    src: image31,
    width: w,
    height: h
  },
  {
    src: image32,
    width: w,
    height: h
  }
]

const japanPhotos = [
  {
    src: image33,
    width: w,
    height: h
  },
  {
    src: image34,
    width: w,
    height: h
  },
  {
    src: image35,
    width: w,
    height: h
  },
  {
    src: image36,
    width: w,
    height: h
  },
  {
    src: image37,
    width: w,
    height: h
  },
  {
    src: image38,
    width: w,
    height: h
  },
  {
    src: image39,
    width: w,
    height: w
  },
  {
    src: image40,
    width: w,
    height: h
  },
  {
    src: image41,
    width: w,
    height: h
  },
  {
    src: image42,
    width: w,
    height: w
  },
  {
    src: image43,
    width: w,
    height: h
  },
  {
    src: image44,
    width: w,
    height: h
  },
  {
    src: image45,
    width: w,
    height: h
  },
  {
    src: image46,
    width: w,
    height: h
  },
  {
    src: image47,
    width: w,
    height: h
  },
  {
    src: image48,
    width: w,
    height: h
  },
  {
    src: image49,
    width: w,
    height: h
  },
  {
    src: image50,
    width: w,
    height: h
  },
  {
    src: image51,
    width: w,
    height: h
  },
  {
    src: image52,
    width: w,
    height: h
  },
  {
    src: image53,
    width: w,
    height: h
  },
  {
    src: image54,
    width: w,
    height: h
  },
  {
    src: image55,
    width: w,
    height: h
  },
  {
    src: image56,
    width: w,
    height: h
  },
  {
    src: image57,
    width: w,
    height: h
  },
  {
    src: image58,
    width: w,
    height: h
  },
  {
    src: image59,
    width: w,
    height: h
  },
  {
    src: image60,
    width: w,
    height: h
  },
  {
    src: image61,
    width: w,
    height: h
  },
  {
    src: image62,
    width: w,
    height: h
  },
  {
    src: image63,
    width: w,
    height: h
  },
  {
    src: image64,
    width: w,
    height: h
  },
  {
    src: image65,
    width: w,
    height: h
  },
  {
    src: image66,
    width: h,
    height: w
  },
  {
    src: image67,
    width: w,
    height: h
  },
  {
    src: image68,
    width: w,
    height: h
  },
  {
    src: image69,
    width: w,
    height: h
  },
  {
    src: image70,
    width: w,
    height: h
  },

  {
    src: image71,
    width: w,
    height: h
  },
  {
    src: image72,
    width: w,
    height: h
  },
  {
    src: image73,
    width: w,
    height: h
  },
  {
    src: image74,
    width: w,
    height: h
  },
  {
    src: image75,
    width: w,
    height: h
  },
  {
    src: image76,
    width: w,
    height: h
  }
];
 
export default Photos;