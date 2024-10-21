import img1 from "../../assets/review/handsome-businessman-signing-contract-with-partner.jpg"
import img2 from "../../assets/review/smiling-businessman-financial-analyst-stock-broker-looking.jpg"
import img3 from "../../assets/review/young-happy-couple-having-consultations-with-bank-manager-meeting-office.jpg"
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Review.css"
const Review = () => {
       return (
         <div>
           <SectionTitle
             title={"Kind words from our Customers"}
             subtitle={
               "Read reviews and opinions from our global travel community!"
             }
           />
           <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-10">
             <figure className="snip1563">
               <img src={img1} alt="sample110" />
               <figcaption>
                 <h3>Samuel Serif</h3>
                 <p>
                   The only skills I have the patience to learn are those that
                   have no real application in life.
                 </p>
               </figcaption>
               <a href="#"></a>
             </figure>
             <figure className="snip1563">
               <img src={img2} alt="sample59" />
               <figcaption>
                 <h3>Fletch Skinner</h3>
                 <p>
                   But Calvin is no kind and loving god! He's one of the old
                   gods! He demands sacrifice!
                 </p>
               </figcaption>
               <a href="#"></a>
             </figure>
             <figure className="snip1563">
               <img src={img3} alt="sample59" />
               <figcaption>
                 <h3>Fletch Skinner</h3>
                 <p>
                   But Calvin is no kind and loving god! He's one of the old
                   gods! He demands sacrifice!
                 </p>
               </figcaption>
               <a href="#"></a>
             </figure>
             <figure className="snip1563">
               <img src={img1} alt="sample59" />
               <figcaption>
                 <h3>Fletch Skinner</h3>
                 <p>
                   But Calvin is no kind and loving god! He's one of the old
                   gods! He demands sacrifice!
                 </p>
               </figcaption>
               <a href="#"></a>
             </figure>
           </div>
         </div>
       );
};

export default Review;