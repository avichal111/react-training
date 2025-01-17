import './pageHeader.css';
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext, userContextType } from '../../context/context';

const PageHeader = () : JSX.Element => {

    const context = useContext<userContextType>(UserContext)

    return (
        <div className="pageHeader">
            <h1><Link to="/">Payments Application</Link></h1>
            {context.id !== 0 && <Menu/> }
        </div>
    );
}

export default PageHeader