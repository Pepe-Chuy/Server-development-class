function createArray(size){
      const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(i);
  }
  return arr;
}


function execBenchmark(size){
    const data = createArray(size);

    // filter + map
    console.time("filter + map");
    const result1 = data.filter(n => n % 2 === 0).map(n => n * 2);
    console.timeEnd("filter + map")

    // reduce
    console.time("reduce");
    const result2 = data.reduce((acc, n) => {
    if (n % 2 === 0) {
      acc.push(n * 2);
    }
    return acc;
    });
    console.timeEnd("reduce");


    // for loop
    console.time("for loop");
    const result3 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
        result3.push(data[i] * 2);
        }
    }
    console.timeEnd("for loop");


    // validamos
    console.log("Resultados:",
    result1.length === result2.length &&
    result2.length === result3.length
  );
}



///// USO

runBenchmark(10_000);
runBenchmark(100_000);
runBenchmark(1_000_000);
