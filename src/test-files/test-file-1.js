import {inventory} from "../constants/inventory.js";

const types = inventory.map(tv => tv.type);
console.log(types)

const soldOutTVs = inventory.filter(tv => tv.sold === tv.originalStock);
console.log(soldOutTVs);

const typeName = inventory.find(tv => tv.type === "NH3216SMART")
console.log(typeName)

const sportsSuitableTVs = inventory.map(tv => {
    return {
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100
    };
});

console.log(sportsSuitableTVs);

const largeScreenTVs = inventory.filter(tv => tv.availableSizes.some(size => size >= 65));
console.log(largeScreenTVs);

const ambiLightTVs = inventory.filter(tv =>
    tv.options.some(option => option.name === "ambiLight" && option.applicable)
);

console.log(ambiLightTVs);
