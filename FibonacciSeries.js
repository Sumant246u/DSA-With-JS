function Fibonacci(n) {
    let fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

    }
    return fib.slice(0,n)
}
console.log(Fibonacci(15));
