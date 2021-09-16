import React from 'react';
import Header from '../components/Header';

export default () => {
    return (
        <>
            <Header />
            <div className="flex  flex-col p-4">
                <div>
                    A youtube clone made on ReactJS, TailwindCSS, NodeJS and MongoDB.
                </div>
                <br/>
                <div>
                    Tech Stack
                    <ul className="ml-4" style={{'listStyleType': 'circle'}}>
                        <li>NodeJS</li>
                        <li>ReactJS</li>
                        <li>MongoDB</li>
                    </ul>
                    If you want to contribute in this project please contact me.
                </div><br/>
                <div>
                    Contact : <br />
                    ✉️ <i>shivamsharma.btp@gmail.com</i> <br/>
                    
                    🌐 <a href="http://facebook.com/people/Shivam-Sharma/100004901058827">Facebook</a>
                </div>
                <br/><br/>
                
            </div>
        </>
    )
}