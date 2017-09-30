debugger;
const fibo = function(num) {
  if (num <= 1) {
    return 1;
  }
    console.log(num)
    return fibo(num - 1) + fibo(num - 2);
};

fibo(7);