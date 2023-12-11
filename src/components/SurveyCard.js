export const SurveyCard = ({title, shortDescription, surveyType}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
       <div div className = "card-body" >
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{shortDescription}</p>
        <p className="card-text">{surveyType}</p>
      </div>
    </div>
  )
}