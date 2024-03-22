import ReactDOM from 'react-dom/client';
import './../index.css';
import HomePage, { homeprops, userType } from './HomePage';

type homeReturn = {onUserStateChange: (user:userType) => void}
const mount = (el: Element, props: homeprops) : homeReturn => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  // {user: userType, login: (user:userType) => void, logout: () => void}
  root.render(<HomePage {...props}/>);

  const f = (user: userType) => {
    root.render(<HomePage {...props} user={user}/>);
  }

  return {onUserStateChange: f}

}

export { mount };
