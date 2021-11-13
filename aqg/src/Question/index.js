const qBank = [
{'question': 'There are ____ numbers of class in the Program.', 'answers': ['48', '43', '41', '44'], 'correct': '44', 'questionId': 101},
{'question': 'Class Message belongs to Which package?', 'answers': ['com.git.csi', 'luxx.mq.message', 'luxx.log.executor', 'None of the above'], 'correct': 'luxx.mq.message', 'questionId': 102},
{'question': 'Class PoiIndexService belongs to Which package?', 'answers': ['luxx.index.model', 'luxx.index.util', 'luxx.index.service', 'luxx.index.service'], 'correct': 'luxx.index.service', 'questionId': 103},
{'question': 'Class DateTimeUtil belongs to Which package?', 'answers': ['luxx.index.config', 'luxx.log.util', 'luxx.mq.message', 'None of the above'], 'correct': 'luxx.log.util', 'questionId': 104},
{'question': 'Class HeartBeatHandler belongs to Which package?', 'answers': ['luxx.index.model', 'luxx.mq.handler', 'luxx.log.executor', 'None of the above'], 'correct': 'luxx.mq.handler', 'questionId': 105},
{'question': 'Is there any generalization(inheritance)?', 'answers': ['Yes', 'No'], 'correct': 'Yes', 'questionId': 106},
{'question': 'Is there any multi-level inheritance?', 'answers': ['Yes', 'No'], 'correct': 'Yes', 'questionId': 107},
]

// n = 5 to export 5 question
var foo = function(n = 5){
   return Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
}
export default foo;
