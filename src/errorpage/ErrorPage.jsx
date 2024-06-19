import React from 'react';

function ErrorPage({user}) {
    return (
        <div>
            <h1>tebe syda nelza {user.name} {user.lastname}</h1>
        </div>
    );
}

export default ErrorPage;