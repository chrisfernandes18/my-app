import React from "react"
import Gallery from 'react-photo-gallery';

function Photos(props) {
  return (
    <div>
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
    src: require("./assets/costa_rica/2019/IMG_0003.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_0022.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_0080.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_0154.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_0176.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_0277.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9732.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9745.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9793.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9802.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9805.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9849.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2019/IMG_9985.JPG"),
    width: w,
    height: h
  }
]


const costaricaPhotos18 = [
  {
    src: require("./assets/costa_rica/2018/IMG_0454.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0581.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0582.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0588.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0589.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0603.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0608.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0704.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0749.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0803.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0807.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0850.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/costa_rica/2018/IMG_0868.JPG"),
    width: w,
    height: h
  }
]

const eclipsePhotos = [
  {
    src: require("./assets/eclipse/IMG_0086.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/eclipse/IMG_0110.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/eclipse/IMG_0090.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/eclipse/IMG_0111.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/eclipse/IMG_0114.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/eclipse/IMG_0118.JPG"),
    width: w,
    height: h
  }
]

const japanPhotos = [
  {
    src: require("./assets/japan/IMGP1555.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP1603.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP1617.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP1752.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP1817.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP1968.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2028.JPG"),
    width: w,
    height: w
  },
  {
    src: require("./assets/japan/IMGP1969.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2007.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2029.JPG"),
    width: w,
    height: w
  },
  {
    src: require("./assets/japan/IMGP2118.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2158.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2201.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2327.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2331.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2351.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2402.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2414.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2415.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2445.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2453.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2457.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2503.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2538.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2539.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2543.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2548.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2609.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2613.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2618.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2621.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2639.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2716.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2737.JPG"),
    width: h,
    height: w
  },
  {
    src: require("./assets/japan/IMGP2796.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2791.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2794.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2795.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2870.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2833.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2871.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP3145.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP2928.JPG"),
    width: w,
    height: h
  },
  {
    src: require("./assets/japan/IMGP3159.JPG"),
    width: w,
    height: h
  }
];
 
export default Photos;