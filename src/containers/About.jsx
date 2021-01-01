import React from 'react';
import Header from '../components/Header';

export default () => {
    return (
        <>
            <Header />
            <div className="flex  flex-col p-4">
                <div className="w-full flex justify-center">
                    <div className="text-center mb-4">
                        na yad vacaś citra-padaṁ harer yaśo<br />
                        jagat-pavitraṁ pragṛṇīta karhicit<br/>
                        tad vāyasaṁ tīrtham uśanti mānasā<br/>
                        na yatra haṁsā niramanty uśik-kṣayāḥ<br/>
                    </div>
                </div>
                <div className="mb-8">
                    <i>Those words which do not describe the glories of the Lord, who alone can sanctify the atmosphere of the whole universe, are considered by saintly persons to be like unto a place of pilgrimage for crows. Since the all-perfect persons are inhabitants of the transcendental abode, they do not derive any pleasure there.</i>
                </div>
                <div>
                    Hare Krishna.! Welcome to BhaktiTube. For the trancendental pleasure of Srila Prabhupada and his devotees. This project is created to bring all devotional videos under one umbrella. 
                    As more and more devotional lectures are uploaded and viewed on youtube I felt there is dier need to create a platform for safe browsing on videos.
                </div><br/>
                <div>
                    Tech Stack
                    <ul className="ml-4" style={{'listStyleType': 'circle'}}>
                        <li>NodeJS</li>
                        <li>ReactJS</li>
                        <li>MongoDB</li>
                    </ul>
                    If you want to contribute in this project contact me or raise a pull request on <a href="https://github.com/shivamsharmabtp/btb-client"><i>GitHub</i></a>
                </div><br/>
                <div>
                    Contact : <br />
                    ✉️ <i>shivamsharma.btp@gmail.com</i> <br/>
                    📱 +91-9024519681 <br/>
                    🌐 <a href="http://facebook.com/people/Shivam-Sharma/100004901058827">Facebook</a>
                </div>
                <br/><br/>
                For any Feedback, Queries or Bug Report please comment below. I would be more than happy to hear you.
                <div class="fb-comments" data-href={window.location.href} data-width="100%" data-numposts="50" data-colorscheme="dark" data-lazy="true"></div>
            </div>
        </>
    )
}