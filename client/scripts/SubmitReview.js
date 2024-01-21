const SubmitReview = (data) => {
    const prof_name = data.name;
    const difficulty = data.difficulty;
    const quality = data.quality;
    const mod = data.mod;
    const comments = data.comments;
    const timestamp = Date().toLocaleString();
    const request_schema = {
        "profName" : prof_name,
        "module" : mod,
        "quality" : quality,
        "difficulty" : difficulty,
        "content" : comments,
        "timePosted" : timestamp,
    };
    console.log(request_schema);
}

export default SubmitReview;