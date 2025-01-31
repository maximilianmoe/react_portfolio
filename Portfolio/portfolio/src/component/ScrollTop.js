import {useEffect, useEffekt} from 'react';
import {useLocation} from 'react-router-dom';

function ScrollTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scroll({
            top: 0,
            left:0,
        })
    }, [pathname]);
    return null;
}

export default ScrollTop;