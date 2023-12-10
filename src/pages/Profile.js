import React from "react";
import AuthService from "../services/AuthService";
import SurveyService from "../services/SurveyService";


import { SurveyCard } from "../components/surveyCard";

const Profile = () => {

  const currentUser = AuthService.getCurrentUser();
  const [allOfUserSurvey, setAllOfUserSurvey] = React.useState([<div>A</div>]);;

  const fetchSurveys = async () => {
    const data = await SurveyService.listAllofUserSurvey(currentUser.id);
    console.log(data);
    setAllOfUserSurvey(await data);
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
            allOfUserSurvey.map
              ((allOfUserSurvey, i) =>
                <SurveyCard
                  title={allOfUserSurvey.title}
                  shortDescription={allOfUserSurvey.shortDescription}
                  surveyType={allOfUserSurvey.shortDsurveyTypeescription}
                  key={i}
                />
              )

              // [
              //   <SurveyCard
              //     title={'2'}
              //     shortDescription={2}
              //     surveyType={2}
              //   />
              // ]
          }
        </div>
      </header>
    </div>
  );
};

export default Profile;
