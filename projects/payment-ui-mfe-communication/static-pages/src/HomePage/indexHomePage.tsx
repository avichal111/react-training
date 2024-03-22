import ReactDOM from 'react-dom/client';
import './../index.css';
import HomePage, { homeprops } from './HomePage';

const mount = (el: Element, props: homeprops) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<HomePage {...props}/>);
}

export { mount };
