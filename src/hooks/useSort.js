import { useMemo } from "react";

export function useSort(sortBy, sortingOrder, dataToSort) {
  const sortedData = useMemo(() => {
    switch (sortBy) {
      case "INT":
        dataToSort.sort((charA, charB) => {
          return sortingOrder
            ? charB.powerstats.intelligence - charA.powerstats.intelligence
            : charA.powerstats.intelligence - charB.powerstats.intelligence;
        });
        break;
      case "STR":
        dataToSort.sort((charA, charB) => {
          return sortingOrder
            ? charB.powerstats.strength - charA.powerstats.strength
            : charA.powerstats.strength - charB.powerstats.strength;
        });
        break;
      case "SPD":
        dataToSort.sort((charA, charB) => {
          return sortingOrder
            ? charB.powerstats.speed - charA.powerstats.speed
            : charA.powerstats.speed - charB.powerstats.speed;
        });
        break;
      case "DUR":
        dataToSort.sort((charA, charB) => {
          return sortingOrder
            ? charB.powerstats.durability - charA.powerstats.durability
            : charA.powerstats.durability - charB.powerstats.durability;
        });
        break;
      case "PWR":
        dataToSort.sort((charA, charB) => {
          return sortingOrder
            ? charB.powerstats.power - charA.powerstats.power
            : charA.powerstats.power - charB.powerstats.power;
        });
        break;
      case "CMB":
        dataToSort.sort((charA, charB) => {
          return sortingOrder
            ? charB.powerstats.combat - charA.powerstats.combat
            : charA.powerstats.combat - charB.powerstats.combat;
        });
        break;
      default:
        dataToSort.sort((charA, charB) => {
          return sortingOrder ? charB.id - charA.id : charA.id - charB.id;
        });
    }
    return dataToSort;
  }, [sortBy, sortingOrder, dataToSort]);

  return sortedData;
}
