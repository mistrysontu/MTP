import random
from bs4 import BeautifulSoup as bs

# Define colour
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


# Read the ucls file
with open("./data/uml.ucls") as fp:
    soup = bs(fp, 'lxml')

flag_class = False
flag_inherit = False
package_of_class = None


class Class:
    def __init__(self, name, package):
        self.name = name
        self.package = package


class Inherit:
    def __init__(self, base, derived):
        self.base = base
        self.derived = derived


# Find all classes
all_classes = soup.findAll('class')
if(len(all_classes) > 0):
    flag_class = True

# Find all class name and the package it belongs to
class_list = list()
package_list = list()
class_id_map = dict()
if flag_class:
    for classes in all_classes:
        temp_list = classes['name'].split('.')
        class_id_map[classes['id']] = temp_list[-1]
        if len(temp_list) > 1:  # If the class belongs to any package
            c = Class(name=temp_list[-1], package=".".join(temp_list[0:-1]))
            class_list.append(c)

            # Store all the unique package name.
            if ".".join(temp_list[0:-1]) not in package_list:
                package_list.append(".".join(temp_list[0:-1]))

        if len(temp_list) == 1:  # If the class doesn't belongs to any class.
            c = Class(name=temp_list[-1], package=None)
            class_list.append(c)


# Find if there are any inheritance or not.
all_generalization = soup.findAll('generalization')
if(len(all_generalization) > 0):
    flag_inherit = True

# Find all class name and the package it belongs to
inherit_list = list()
if flag_inherit:
    for gen in all_generalization:
        count = 1
        base = None
        derived = None
        for i in gen.findAll('end'):
            if count % 2 == 1:
                base = i
            else:
                derived = i
            count += 1
        c = Inherit(base=class_id_map[base['refid']],
                    derived=class_id_map[derived['refid']])
        inherit_list.append(c)


questions = {
    "class": "There are ____ numbers of class in the Program.",
    "generalization": "Is there any generalization(inheritance)?",
    "multi_inheritance": "Is there any multi-level inheritance?",
}


def save_json(arr, loc):
    with open(loc, 'w+') as file:
        file.writelines("const qBank = [\n")
        file.writelines("% s,\n" % data for data in arr)
        file.writelines(''']

// n = 5 to export 5 question
var foo = function(n = 5){
   return Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
}
export default foo;
''')


def get_int_answer_list(right_answer):
    a, b = right_answer - 5, right_answer + 5
    answer = random.sample(range(a, b), 4)

    answer = [str(i) for i in answer]
    unformatedAns = answer.copy()

    if str(right_answer) not in answer:
        loc = random.randint(0, 3)
        unformatedAns[loc] = str(right_answer)
        answer[loc] = bcolors.UNDERLINE + bcolors.OKCYAN + \
            str(right_answer) + bcolors.ENDC
    else:
        loc = answer.index(str(right_answer))
        answer[loc] = bcolors.BOLD + bcolors.OKBLUE + \
            str(right_answer) + bcolors.ENDC
    return answer, unformatedAns, str(right_answer)


def get_package_list(right_package):
    ''' Used for getting 4 options for package related question '''
    m_packages = list()
    tempPackageList = ['java.lang.Object', 'pac.wbc.mmc', 'smsng.lve.sushi', 'lang.exp.exr', 'pac.dum.man', 'craft.game.mine', 'rnad.andx.andx', 'xom.xoimi.lcs', 'com.bule.bulega', 'com.techno.blade', 'uk.blade.tech', 'ssr.gam.techno', 'com.example.java', 'com.bp.read']
    unformated_package_list = list()
    correct = ""
    if len(package_list) >= 4:
        m_packages = random.sample(package_list, 4)
        add_none = random.sample((True, False), 1)
        if add_none:
            m_packages[3] = 'None of the above'
        unformated_package_list = m_packages.copy()
        # Ensure the right answer is always present in the available options
        loc = random.randint(0, 3)
        m_packages[loc] = bcolors.BOLD + \
            bcolors.OKBLUE + right_package + bcolors.ENDC
        unformated_package_list[loc] = right_package
        correct = right_package
    else:
        m_packages.extend(package_list)
        
        m_packages.extend(random.sample(tempPackageList, 4-len(m_packages)))
        random.shuffle(m_packages)
        unformated_package_list = m_packages.copy()
        correct = ''
        if right_package not in m_packages:
            m_packages[3] = bcolors.BOLD + bcolors.OKBLUE + \
                'None of the above' + bcolors.ENDC
            correct = 'None of the above'
        else:
            loc = m_packages.index(str(right_package))
            m_packages[loc] = bcolors.BOLD + \
                bcolors.OKBLUE + m_packages[loc] + bcolors.ENDC
            correct = unformated_package_list[loc]

    return m_packages, unformated_package_list, correct

def print_question(bank):
    question_bank = random.sample(list(bank), len(bank))
    count = 0
    for i in question_bank:
        count += 1
        print('\nQ'+str(count) + '.', i, end="\n  ")
        opt = 97
        for j in bank[i]:
            print(chr(opt)+'.', j, end='\t')
            opt += 1
        print()

def main():
    bank = dict()
    qBank = [] # will be used to show in website
    questionId = 100
    if flag_class:
        # Generate quesion about number of classes
        no_of_class = len(all_classes)
        answers = get_int_answer_list(no_of_class)
        bank[questions['class']] = answers[0] # formated answers
        qBank.append(
            {'question': questions['class'],
            'answers': answers[1],
            'correct' : answers[2],
            'questionId': questionId + 1
            }
        )
        questionId += 1;

        # ask about package
        m_classes = random.sample(class_list, int(
            no_of_class/10) if no_of_class > 10 else 1)
        for i in m_classes:
            question = "Class {} belongs to Which package?".format(i.name)
            answers = get_package_list(i.package)
            bank[question] = answers[0]

            qBank.append({
            'question': question,
            'answers': answers[1],
            'correct' : answers[2],
            'questionId': questionId + 1
            })
            questionId += 1;

    # Find if there are any inheritance or not.

    flag = True
    if len(inherit_list) > 1:
        bank[questions['generalization']] = [bcolors.BOLD + bcolors.OKBLUE + 'Yes' + bcolors.ENDC, 'No']
    else:
        bank[questions['generalization']] = ['Yes', bcolors.BOLD + bcolors.OKBLUE + 'No' + bcolors.ENDC]
        flag = False

    qBank.append({
    'question': questions['generalization'],
    'answers': ['Yes', 'No'],
    'correct' : 'Yes' if flag else 'No',
    'questionId': questionId + 1
    })
    questionId += 1;

    # Find multi level inheritance.
    base_classes = [ i.base for i in inherit_list]
    derived_classes = [ i.derived for i in inherit_list]
    
    flag = True
    if(any(i in base_classes for i in derived_classes)):
        bank[questions['multi_inheritance']] = [bcolors.BOLD + bcolors.OKBLUE + 'Yes' + bcolors.ENDC, 'No']
    else:
        bank[questions['multi_inheritance']] = ['Yes', bcolors.BOLD + bcolors.OKBLUE + 'No' + bcolors.ENDC]
        flag = False

    qBank.append({
    'question': questions['multi_inheritance'],
    'answers': ['Yes', 'No'],
    'correct' : 'Yes' if flag else 'No',
    'questionId': questionId + 1
    })
    questionId += 1;

    print_question(bank)
    # print(qBank)
    save_json(loc = '../aqg/src/Question/index.js', arr=qBank)

if __name__ == '__main__':
    main()
