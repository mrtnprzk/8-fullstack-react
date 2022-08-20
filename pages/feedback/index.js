import React, {useState} from "react";
import { buildFeedbackPath, extratFeedback } from "../api/feedback/index";

const FeedbackPage = (props) => {

    const {feedbackItems} = props;

    const [feedbackData, setFeedbackData] = useState();

    function loadFeedbackHandler(id) {
        fetch(`/api/feedback/${id}`).then(response => response.json()).then(data => {
            setFeedbackData(data.feedback)
        })
    }

  return (
    <>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Detail
            </button>
          </li>
        ))}
      </ul>
      {feedbackData && <p>{feedbackData.email}</p>}
    </>
  );
}

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extratFeedback(filePath);

    return {
        props: {
            feedbackItems: data
        }
    }
}

export default FeedbackPage;