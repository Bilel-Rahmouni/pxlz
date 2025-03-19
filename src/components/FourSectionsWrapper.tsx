  
import BusinessSection from './BusinessSection';
import MobileSection from './MobileAppSection';
import SAASSection from './SAASSection';
import ProfessionalPortfolioSection from './ProfessionalPortfolioSection'; 
 

const FourSectionsWrapper = () => {

  


  return (
    <div className="w-full">
      <BusinessSection />
      <MobileSection />
      <SAASSection />
      <ProfessionalPortfolioSection />
    </div>
  );
};

export default FourSectionsWrapper; 