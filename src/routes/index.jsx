import { createBrowserRouter } from 'react-router-dom';

import { Details, Home, Movies, PersonDetails, Series } from '../containers';
import { DefaultLayout } from '../layout/DefaultLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'filmes', element: <Movies /> },
      { path: 'series', element: <Series /> },
      { path: 'detalhes/:type/:id', element: <Details /> },
      { path: 'detalhes/person/:id', element: <PersonDetails /> },
    ],
  },
]);

// function Router() {
//   return (
//     <Routes>
//       <Route element={<DefaultLayout />} >

//         <Route path="/" element={<Home />} />
//         <Route path="/filmes" element={<Movies />} />
//         <Route path="/series" element={<Series />} />
//       </Route>
//     </Routes>
//   );
// }
