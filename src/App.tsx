import Menu from './components/menu/Menu'
import Today from './components/today/Today'

function App() {

  return (
    <>
      <div className="p-5 h-full bg-white font-['Poppins'] flex justify-between" >
        <Menu />
        <Today />
      </div>

      
    </>
  )
}

export default App
