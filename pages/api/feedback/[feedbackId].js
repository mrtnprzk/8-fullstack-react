import {buildFeedbackPath, extratFeedback} from "./index"

function handler(req, res) {

    const feedbackId = req.query.feedbackId; //feedbackId bc name of file [feedbackId].js
    const filePath = buildFeedbackPath();
    const feedbackData = extratFeedback(filePath);
    const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);
    res.status(200).json({feedback: selectedFeedback})
};

export default handler;