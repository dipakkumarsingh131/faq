import React from 'react';
import ImageLink from './ImageLink';
import { Header } from './Header';
import Content from './Content';

function App() {
    return (
        <div>
            <ImageLink />
            <div className='front'>
            <Header />
            <Content />
            </div>
        </div>
    );
}
export default App;
