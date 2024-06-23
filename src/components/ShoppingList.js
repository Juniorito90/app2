import { plantList } from "../datas/plantList"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem";

function ShoppingList() {
    // Creation de liste d'elements uniques avec reduce()
    // const categories = plantList.reduce(
    // 		(acc, plant) =>
    // 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
    // 		[]
    // 	)


    // Creation de liste d'elements uniques de categories avec forEach()
    const categories = [];
    
    plantList.forEach(plant => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isBestSale, isSpecialOffer }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        isBestSale={isBestSale}
                        isSpecialOffer={isSpecialOffer}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList