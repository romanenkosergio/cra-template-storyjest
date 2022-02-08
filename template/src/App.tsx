import React from 'react';

import {Button} from 'components';

import {useGetAllUsersQuery} from 'services';

const App = () => {

    /** Test RTK Query req **/
    const {data, error, isLoading} = useGetAllUsersQuery();

    return (
        <>
            <h1>Fourmeta Box</h1>
            <Button label="text"/>
        </>
    );
};

export default App;
