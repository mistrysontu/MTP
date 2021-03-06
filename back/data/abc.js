const qBank = [
{'question': 'There are ____ numbers of class in the Program.', 'answers': ['4', '8', '9', '6'], 'correct': '6', 'questionId': 101},
{'question': 'Class dummyClass belongs to Which package?', 'answers': ['com.example.calculator', 'pac.wbc.mmc', 'lang.exp.exr', 'uk.blade.tech'], 'correct': 'com.example.calculator', 'questionId': 102},
{'question': 'Is there any generalization(inheritance)?', 'answers': ['Yes', 'No'], 'correct': 'Yes', 'questionId': 103},
{'question': 'Is there any multi-level inheritance?', 'answers': ['Yes', 'No'], 'correct': 'Yes', 'questionId': 104},
]

// n = 5 to export 5 question
var foo = function(n = 5){
   return Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
}
export default foo;
