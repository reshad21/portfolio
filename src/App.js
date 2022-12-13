import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Router';

function App() {
  return (
    <>
      {/* <ParticleBackground /> */}
      <div className=''>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </>
  );
}

export default App;
