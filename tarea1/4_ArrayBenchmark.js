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
    let start = performance.now();

    const result1 = data.filter(n => n % 2 === 0).map(n => n * 2);
    
    let filterMapTime = performance.now() - start;

    // reduce
    let start = performance.now();   
    
    const result2 = data.reduce((acc, n) => {
    if (n % 2 === 0) {
      acc.push(n * 2);
    }
    return acc;
    }, []);
    console.timeEnd("reduce");

    let reduceTime = performance.now() - start;

    // for loop
    let start = performance.now();
    
    const result3 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
        result3.push(data[i] * 2);
        }
    }
    console.timeEnd("for loop");
    
    let forTime = performance.now() - start;

    // validamos
    console.log("Resultados:");
    console.log(`filter + map = ${filterMapTime.toFixed(3)} ms`);
    console.log(`reduce       = ${reduceTime.toFixed(3)} ms`);
    console.log(`for loop     = ${forTime.toFixed(3)} ms`);
}



///// USO

execBenchmark(10_000);
execBenchmark(100_000);
execBenchmark(1_000_000);
