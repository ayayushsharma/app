import React from "react";
import AuthService from "../services/AuthService";
import SurveyService from "../services/SurveyService";


import { SurveyCard } from "../components/surveyCard";

const Profile = () => {
  
  const currentUser = AuthService.getCurrentUser();
  const AllofUserSurvey = SurveyService.listAllofUserSurvey(currentUser.id)
    .then((allSurveys) =>
      allSurveys.map((object, i) =>
        <
          SurveyCard title={object.title}
          shortDescription={object.shortDescription}
          surveyType={object.shortDsurveyTypeescription}
          key={i}
        />
      )
    )


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>

        <div>
          {AllofUserSurvey}
        </div>
      </header>
    </div>
  );
};

export default Profile;
