import json
file = "./questions.txt"
res = {} # will be used for saving the json file.
QAList = []
with open(file) as fn:
    for d in fn:
        if len(d) != 1:
            QAList.append(list(map(str.strip, d.strip().split(","))))
    
QList = QAList[::2]
AList = QAList[1::2]

for i in range(len(QList)):
    res[str(QList[i][0])] = AList[i]
    
print(res)
with open('Q&A.json', 'w') as outfile:
    json.dump(res, outfile)
    

            


