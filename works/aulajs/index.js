const classA = [
  {
    name: "Mayk",
    grade: 9.8,
  },
  {
    name: "Diego",
    grade: 9.8
  },
  {
    name: "Fulano",
    grade: 2
  },
  {
    name: "Fulano 2",
    grade: 10
  }
]

const classB = [
  {
    name: "Cleiton",
    grade: 7
  },
  {
    name: "Robson",
    grade: 5
  },
  {
    name: "Ciclano",
    grade: 0
  },
  {
    name: "Novo Aluno",
    grade: 6.5
  },
]

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade

  }

  const avarage = sum / students.length
  return avarage
}

function sendMessage(avarage, turma) {
  if (avarage > 5) {
    console.log(`${turma} avarage: ${avarage}. Great Job`)
  } else {
    console.log(`${turma} avarage: ${avarage}. Is not good`)
  }

}

function markAsFlunked(students) {
  students.flunked = false;

  if (students.grade < 5) {
    students.flunked = true;
  }

}

function sendFlunkedMessage(students) {
  if (students.flunked) {
    console.log(`${students.name} flunked!`)
  }
}

function studentFlunked(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }

}

const avarage1 = calculateAverage(classA)
const avarage2 = calculateAverage(classB)

sendMessage(avarage1, 'classA')
sendMessage(avarage2, 'classB')

studentFlunked(classA)
studentFlunked(classB)