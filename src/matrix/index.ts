export const kWeakestRows = (mat: number[][], k: number): number[] => {
  const numberOfSolders: { index: number; soldiers: number }[] = [];

  for (let i = 0; i < mat.length; i++) {
    let numberOfSoldersRow = 0;

    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        numberOfSoldersRow++;
      } else {
        break;
      }
    }

    numberOfSolders.push({
      index: i,
      soldiers: numberOfSoldersRow,
    });
  }

  const ordered = numberOfSolders
    .sort(
      (
        { index: i, soldiers: soildersI },
        { index: j, soldiers: soildersJ }
      ) => {
        if (soildersI < soildersJ) return -1;
        if (soildersI === soildersJ && i < j) return -1;
        return 1;
      }
    )
    .map(({ index }) => {
      return index;
    });

  return ordered.splice(0, k);
};

export const matrixEquals = (mat: unknown[][], mat2: unknown[][]) => {
  if (mat.length !== mat2.length || mat[0].length !== mat2[0].length) {
    return false;
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] !== mat2[i][j]) return false;
    }
  }

  return true;
};
