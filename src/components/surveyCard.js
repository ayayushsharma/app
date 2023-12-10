export const SurveyCard = (object) => {
  return (
    <div className="card" style={{width: '18rem'}}>
       <div div className = "card-body" >
        <h4 className="card-title">{object.title}</h4>
        <p className="card-text">{object.shortDescription}</p>
        <i className="card-text">{object.surveyType}</i>
      </div>
    </div>
  )
}