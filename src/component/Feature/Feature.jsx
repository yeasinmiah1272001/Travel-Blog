
import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FeatureCard from './FeatureCard';

const Feature = () => {
       const [feature, setFeature] = useState([]);

       useEffect(() => {
         fetch("card.json")
           .then((res) => res.json())
           .then((data) => setFeature(data));
       }, []);
       return (
         <div>
           <SectionTitle
             className="mb-6"
             title={"Featured Packages"}
             subtitle={
               "Our Featured Packages allow you to get away from routine, spend time with family and friends."
             }
           />

           <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mx-10'>
              {
                     feature.map((item) => <FeatureCard key={item.id} item={item}/>)
              }
           </div>


         </div>
       );
};

export default Feature;