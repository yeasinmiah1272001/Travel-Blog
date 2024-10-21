import img1 from "../../assets/review/cover-women.jpg"
import SectionTitle from "../SectionTitle/SectionTitle";

const Advanture = () => {
       return (
         <div className="mx-10 ">
           <div className="mb-8">
             <SectionTitle
               title={"Choose Your Adventur"}
               subtitle={
                 "TourPress offer programs and so much more. TourPress is the only way to travel."
               }
             />
           </div>
           <img className="h-96 w-full" src={img1} alt="" />
         </div>
       );
};

export default Advanture;