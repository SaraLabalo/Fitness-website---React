import React from "react";

import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import BlockFeature from "./BlockFeature/BlockFeature";
import InfoProfile from "./Info/Info";
import OurTrainers from "./OurTrainer/OurTrainer";
import PopularTrainings from "./PopularTrainings/PopularTrainings";

function LandingPage(props) {
  return (
    <div>
      <LandingPageHeader />

      <PopularTrainings {...props} />
      <InfoProfile {...props} />
      <OurTrainers {...props} />
    </div>
  );
}

export default LandingPage;
