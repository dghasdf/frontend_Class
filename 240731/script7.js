var sum = 0;
const calcSum = (n) => {
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }

  console.log(`1부터 ${n}까지를 더하면 ${sum} 입니다`);
};

calcSum(10);
