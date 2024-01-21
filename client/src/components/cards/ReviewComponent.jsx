import "./ReviewComponent.css";

const ReviewComponent = ({data}) => {
    console.log("recieved:", data);
    return (
        <div className="review_main">
            <p className="submit">Anon: {data}</p>
        </div>
    );
}

export default ReviewComponent;