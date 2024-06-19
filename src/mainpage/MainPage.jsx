import React from 'react';

function MainPage({user}) {
    return (
        <div>
            <h1>wellcome {user.name} {user.lastname} we are wait you</h1>
        </div>
    );
}

export default MainPage;