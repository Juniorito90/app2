import Banner from "./Banner";
// import Cart from "./Cart";
// import QuestionForm from "./QuestionForm";
import logo from '../assets/logo.png'
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Banner>
        <div style={{display: 'flex'}}>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
          <h1 className='lmj-title'>La maison jungle</h1>
        </div>
			</Banner>
			{/* <Cart /> */}
      {/* <QuestionForm /> */}
      <ShoppingList />
      <Footer />
    </div>
  )
}

export default App