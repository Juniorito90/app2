import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert(`Plante : ${plantName}🌱`)
}

function PlantItem({ id, cover, name, water, light, isBestSale, isSpecialOffer }) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div title={isBestSale && "Ce produit fait partie des meilleures ventes"}>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
                {isBestSale && <span role="img" aria-label="Flammes">🔥</span>}
            </div>
            {isSpecialOffer && <div className="lmj-sales">Promo</div>}
        </li>
    )
}

export default PlantItem