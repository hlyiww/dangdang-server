export const getSubItemFromArray = <
  T extends ItemType<T>[],
  K extends keyof UnwrapArray<T>
>(
  array: T,
  ...keys: K[]
): Pick<UnwrapArray<T>, K>[] => {
  return array.map((item) => {
    return keys.reduce((acc, cur, index) => {
      return { ...acc, [keys[index]]: item[keys[index]] };
    }, {});
  }) as Pick<UnwrapArray<T>, K>[];
};
