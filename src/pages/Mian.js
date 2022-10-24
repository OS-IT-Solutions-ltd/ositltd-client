import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes/routes';

const Mian = () => {
    const publicRoutes = routes.filter((route) => route.role.includes('*'));
  return (
    <>
        <Routes>
            {
                publicRoutes.map((route, key) => (
                    <Route path={route.path} element={<route.element />} />
                ))
            }
        </Routes>
    </>
  )
}

export default Mian;