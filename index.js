const exampleData = "3 ---+-++- 3 ++++ 4 -+-+- 4";
const dataSplitted = exampleData.split(/[\s]+/);
const [testCases, ...rest] = dataSplitted;

function pancakesProblem() {
  for (let testCase = 1, c = 0; testCase <= testCases; ++testCase, c += 2) {
    let s = rest[c];
    let k = parseInt(rest[c + 1]);
    let f = 0;
    let flag = [];
    let res = 0;
    let p = s.split("");

    for (let i = 0; i < p.length; i++) {
      if (flag[i]) {
        f--;
      }

      if ((p[i] === "+" && f % 2 === 1) || (p[i] === "-" && f % 2 === 0)) {
        if (i < p.length - k + 1) {
          res++;
          f++;
          flag[i + k] = true;
        } else {
          res = "IMPOSSIBLE";
          break;
        }
      }
    }
    console.log(`Case #${testCase}: ${res}`);
  }
}

pancakesProblem();
