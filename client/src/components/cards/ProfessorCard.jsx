import "./ProfessorCard.css";
import ReviewComponent from "./ReviewComponent";

const temp = {
    "id_" : 1,
    "profName" : "test name",
    "module" : "test_mod",
    "quality" : 2,
    "difficulty" : 2,
    "content" : ["test1",
"test1", "test2", "test3", "test3", "test2", "test3", "test3", "test2", "test3", "test3", "test2", "test3", "test3", "test2", "test3", "test3", "test2", "test3", "test3", ],
};
const agg_temp = {
    "total_score" : 25,
    "total_reviewers" : 7,
}

const ProfessorCard = ({prof_name}) => {
    console.log("rendering ", prof_name);
    const call_db = () => {return temp;}
    const aggregate_data = () => {return (agg_temp.total_score / agg_temp.total_reviewers).toFixed(2);}
    const prof_profile = call_db();
    const aggregated = aggregate_data();
    const review_array = prof_profile.content;
    var counter = 0;
    const to_render = review_array.map((x) => {
        console.log(x);
        counter++;
        return (
            <div key={counter}>
                <ReviewComponent data={x}></ReviewComponent>
            </div>
        );
    });
    console.log(to_render); 
    console.log(prof_profile.profName);
    console.log(aggregated);
    return (
        <div className="main">
            <div className="professordetails">
                <h1>{prof_profile.profName}</h1>
                <p>Average Quality: {aggregated}</p>
                <p>Modules Taught: {prof_profile.module}</p>
            </div>
            <div className="comment_render">
                {to_render}
            </div>
        </div>
    )
}

export default ProfessorCard;