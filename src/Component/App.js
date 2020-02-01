import React from 'react';
import Login from './Login';
import Logout from './Logout';
import TaskList from './TaskList';
import AuthViewer from './AuthViewer';

function App() {
    const style={
        maxWidth:1200,
        padding:10,
        marginLeft:0,
        

    }
    return (
        <div className='App'>
            <div style={style}>
            <AuthViewer reverse={true}>
            
                <Login />
            </AuthViewer>
            <AuthViewer>
                <Logout />
                <TaskList />
            </AuthViewer>
        </div>
        </div>
    );
}

export default App;
