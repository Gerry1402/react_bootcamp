import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page2" >Page 2</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
};

export default Layout;

Layout.propTypes ={
    children: PropTypes.node,
};