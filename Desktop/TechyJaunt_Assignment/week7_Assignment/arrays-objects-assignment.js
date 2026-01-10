//question one
//creating of array with object student
const students = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 20,
    grades: [85, 92, 78],
  },
  {
    id: 2,
    name: 'shogbaike ololade',
    age: 20,
    grades: [75, 80, 90],
  },
  {
    id: 3,
    name: 'Akintoye Mary',
    age: 16,
    grades: [78, 85, 90],
  },
  {
    id: 4,
    name: 'Lawal Ayomide',
    age: 23,
    grades: [60, 70, 69],
  },
  {
    id: 5,
    name: 'Olanipekun Jerry',
    age: 30,
    grades: [39, 40, 58],
  },
  {
    id: 6,
    name: 'Shobiye Daniel',
    age: 10,
    grades: [40, 39, 70],
  },
  {
    id: 7,
    name: 'Ayorinde Miracle',
    age: 40,
    grades: [15, 10, 50],
  },
];

//question two
//claculating the avegardegrades
const averageGrades = (grades) => {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return Math.round(average * 100) / 100;
};
//calculating average for each student
const studentsWithAverage = students.map((student) => {
  return {
    ...student,
    average: averageGrades(student.grades),
  };
});
console.log(studentsWithAverage);
//question three
const getPassingStudents = (students) => {
  return students.filter((student) => student.average >= 60);
};

const passing = getPassingStudents(studentsWithAverage);
console.log(passing);
//question four
//calculating class average
const classAverage = (students) => {
  const sum = students.reduce((total, student) => total + student.average, 0);
  //dividing the total by the number of students to get the average
  const average = sum / students.length;
  //roundup the average to 2dp using math.round
  return Math.round(average * 100) / 100;
};
const classAvg = classAverage(studentsWithAverage);
console.log(classAvg);

//question five
// Finding a student based on their unique identifer(id)
const findStudentById = (students, id) => {
  //using find to search for student based on the id given
  const student = students.find((student) => student.id === id);
  //if the student is found return the student otherwise return null
  return student || null;
};
console.log(findStudentById(students, 12));
