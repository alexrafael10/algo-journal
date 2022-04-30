export const findKDistantIndices = (nums: number[], key: number, k: number): number[] => {
    const secondConditionIndexes = nums.map((num, index) => num === key ? index : null).filter(num => !!num);

    return nums
      .reduce((acc, _, i) => {
        const absoluteLessThanK = secondConditionIndexes.some(
          (j) => Math.abs(i - j) <= k
        );

        if (absoluteLessThanK) acc.push(i);

        return acc;
      }, []);
};