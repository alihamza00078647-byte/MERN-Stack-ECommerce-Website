import './App.css'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';


function App() {
  return (
      <div className='bg-gray-50 min-h-screen'>
      <>
       <Navbar />
       <hr />
      </>
      <div className='flex w-full'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App;
