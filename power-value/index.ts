export const getKth = (lo: number, hi: number, k: number): number => {
  const getPowerOfX = (x: number): number => {
    let steps = 0;
    let remaining = x;

    while (remaining != 1) {
      if (remaining % 2 === 0) {
        remaining = remaining / 2;
      } else {
        remaining = 3 * remaining + 1;
      }
      steps++;

    }

    return steps;
  }

  const intervalMap: { [key: number]: number } = {};

  for (let i = lo; i <= hi; i++) {
    intervalMap[i] = getPowerOfX(i);
  }

  const sortedInterval: number[] = Object.keys(intervalMap).map(key => parseInt(key)).sort((keyA, keyB) => {
    const a = intervalMap[keyA];
    const b = intervalMap[keyB];

    if (a === b) return keyA - keyB;

    return a - b;
  })

  return sortedInterval[k - 1];
}
