const qBank = [
    {
        question: "Class AuditLog belongs to Which package?",
        answers: ["luxx.mq", "luxx.log.model", "luxx.mq.server", "None of the above"],
        correct: "luxx.log.model" ,
        questionId: "1"
    },
    {
        question: "There are ____ numbers of class in the Program.",
        answers: ["39", "46", "44", "45"],
        correct: "44",
        questionId: "2"
    },
    {
        question: "Class TriviaMultiServer belongs to Which package?",
        answers: ["luxx.mq.server", "com.git.csi", "luxx.log.executor", "None of the above"],
        correct: "com.git.csi",
        questionId: "3"
    },
    {
        question: "Class MqConfig belongs to Which package?",
        answers:["luxx.mq.message", "com.pluralsight", "luxx.mq.config", "None of the above"],
        correct: "com.pluralsight",
        questionId: "4"
    },
    {
        question: "Is there any multi-level inheritance?",
        answers: ["Yes", "No"],
        correct: "Yes",
        questionId: "5"
    },
    {
        question: "Is there any generalization(inheritance)?",
        answers: ["Yes", "No", ""],
        correct: "Yes",
        questionId: "6"
    },
    {
        question: "Class PropertiesUtil belongs to Which package?",
        answers: ["luxx.mq.util", "luxx.mq.util.PropertiesUtil", "luxx.index.config", "None of the above"],
        correct: "None of the above",
        questionId: "7"
    }
]

// n = 5 to export 5 question
var foo = function(n = 5){
   return Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
}
export default foo;

