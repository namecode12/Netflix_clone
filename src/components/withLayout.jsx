import React from 'react';
import Banner from './Banner.jsx'
const withLayout = Page => {
    return () => {
        return (
            <>
                <Banner></Banner>
                <Page />
            </>
        );
    };
};
export default withLayout;