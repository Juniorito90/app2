import '../styles/Banner.css'
import Recommendation from './Recommendation'

function Banner({ children }) {
    return <div className='lmj-banner'>
        {children}
        <Recommendation />
    </div>
}

export default Banner