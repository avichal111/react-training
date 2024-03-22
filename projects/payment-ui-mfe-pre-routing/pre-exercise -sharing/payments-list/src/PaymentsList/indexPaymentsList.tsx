import {createRoot} from 'react-dom/client';
import './../index.css';
import PaymentsList from './PaymentsList';
import { MemoryRouter, Route, RouterProvider, Routes, createMemoryRouter } from 'react-router-dom';
import FindTransactionPage from './FindTransactionPage';

export type PaymentsListProps = {
  serverUrl : string,
  initialPath: string[],
}



const mount = (el: Element, props: PaymentsListProps) : void => {

  const routes = [
       {path: "*", element:  <FindTransactionPage {...props} />},
  ];

  const router = createMemoryRouter(routes, {initialEntries: props.initialPath, initialIndex: 0});


  const root  = createRoot(el);


  root.render(
    <RouterProvider router={router} />);

}

export { mount };

