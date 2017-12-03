var solution = 1;
var product = "1";

for (var n = 1; n <= 12; n++) {
    console.log("n =", n, "!" + (n-1).toString(), " =", solution);
    solution = solution * n;
    product = product + "*" + n;
    console.log("!" + n + "=" + product);
    
}


console.log(solution);
