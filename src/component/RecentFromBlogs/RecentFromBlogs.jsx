import "./RecentFromBlogs.css"

import img1 from "../../assets/sellect-mood/quino-al-404693-330x404.jpg"
import img2 from "../../assets/sellect-mood/sydney-04-330x404.jpg"
import img3 from "../../assets/sellect-mood/sydney-1-330x404.jpg"
import img4 from "../../assets/sellect-mood/tracking-bg-real-330x404.jpg"
import img5 from "../../assets/sellect-mood/venice-featured-720x560.jpg"
import img6 from "../../assets/sellect-mood/wildlife.png"
import { FaUmbrellaBeach, FaUser } from "react-icons/fa6"
import { ImAirplane } from "react-icons/im";
import { GiFishingBoat } from "react-icons/gi"
import SectionTitle from "../SectionTitle/SectionTitle"


const RecentFromBlogs = () => {
       return (
         <div className="mx-10">
           <SectionTitle
           className="mb-6"
             title={"Select your Destination by Mood"}
             subtitle={
               "In the mood to travel? You have to be more specific! and, match your mood to your destination!"
             }
           />
           <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5">
             <figure className="snip1576">
               <img src={img3} alt="sample105" />
               <figcaption>
                 <FaUmbrellaBeach size={80} />
                 <p>ADVENTURE</p>
               </figcaption>
               <a href="#"></a>
             </figure>
             <figure className="snip1576">
               <img className="h-full" src={img2} alt="sample105" />
               <figcaption>
                 <ImAirplane size={80} />
                 <p>ADVENTURE</p>
               </figcaption>
               <a href="#"></a>
             </figure>

             <figure className="snip1576">
               <img src={img4} className="h-full" alt="sample105" />
               <figcaption>
                 <GiFishingBoat size={80} />
                 <p>ADVENTURE</p>
               </figcaption>
               <a href="#"></a>
             </figure>
             <figure className="snip1576">
               <img src={img5} className="h-full" alt="sample105" />
               <figcaption>
                 <GiFishingBoat size={80} />
                 <p>ADVENTURE</p>
               </figcaption>
               <a href="#"></a>
             </figure>
             <figure className="snip1576">
               <img src={img1} alt="sample105" />
               <figcaption>
                 <FaUser size={80} />
                 <p>ADVENTURE</p>
               </figcaption>
               <a href="#"></a>
             </figure>
           </div>
         </div>
       );
};

export default RecentFromBlogs;