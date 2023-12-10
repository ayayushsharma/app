import React from "react";
import AuthService from "../services/AuthService";
import SurveyService from "../services/SurveyService";


import { SurveyCard } from "../components/surveyCard";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();
  const [allOfUserSurvey, setAllOfUserSurvey] = React.useState([]);;
  
  const fetchSurveys = async () => {
    const { data } = await SurveyService.listAllofUserSurvey(currentUser.id)
    const survey = data;
    setAllOfUserSurvey(survey);
    console.log(survey);
  };

  React.useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
        <div>
          {
            allOfUserSurvey.map((object, i) =>
              <
                SurveyCard title={object.title}
                shortDescription={object.shortDescription}
                surveyType={object.shortDsurveyTypeescription}
                key={i}
              />)
          }
        </div>
      </header>
    </div>
  );
};

export default Profile;
