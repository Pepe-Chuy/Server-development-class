function createStudent(size) {
  const students = [];

  const degrees = ["Ing. Sistemas", "Ing. Industrial", "Arquitectura", "Derecho", "Ciencia de Datos"];
  
  for (let i = 0; i < size; i++) {
    students.push({
      id: i,
      name: `Student${i}`,
      email: `student${i}@iteso.com`,
      degree: degrees[i % degrees.length],
      semester: (i % 9) + 1,               
      record_id: `record${i}`
    });
  }

  return students;
}

const students = createStudent(747567);
const recordToSearch = "record747566";


// With for loop
function findByRecordFor(students, record_id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].record_id === record_id) {
      return students[i];
    }
  }
  return null;
}

// Using find
function findByRecordFind(students, record_id) {
  return students.find(student => student.record_id === record_id) || null;
}

// with map (indexing)
function createRecordIndex(students) {
  const index = new Map();

  for (const student of students) {
    index.set(student.record_id, student);
  }

  return index;
}

const recordIndex = createRecordIndex(students);

function findByRecordIndexed(index, record_id) {
  return index.get(record_id) || null;
}



// USE and test
console.time("for");
findByRecordFor(students, recordToSearch);
console.timeEnd("for");

console.time("find");
findByRecordFind(students, recordToSearch);
console.timeEnd("find");

console.time("indexed");
findByRecordIndexed(recordIndex, recordToSearch);
console.timeEnd("indexed"); 


// Results

// for: 9.222ms
// find: 10.518ms  
// indexed: 0.061ms



// la diferencia entre el for y el find es mínima, los dos pasan el array completo, pero el indexado es mucho más rápido porque lo accede directamente y a la primera sin tener que recorrer todo el arreglo, por eso es mi recomendación para muchas busquedas, porque indexar tiene su costo inicial, si solo sería busqueda de una vez, la mejor opción sería el find