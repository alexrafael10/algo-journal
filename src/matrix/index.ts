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
