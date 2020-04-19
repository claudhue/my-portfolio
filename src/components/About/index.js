import React from 'react'
import Logo from '../Images/profile.png'

export default function About() {
    return (
        <div id="about">
            <div class="jumbotron">
                <h3 class="heading">About</h3>
                <div class="row">
                    <div class="col-md-4 text-center">
                        <img src= {Logo} alt="profile" height="300" width="300"/>
                    </div>
                    <div class="col-md-8 text-center">
                        <p>I recently obtained my certificate in Full Stack Web Development at Southern Methodist University.  Skills in HTML, CSS, JavaScript, jQuery, Node.js, Express.js, React.js, MongoDB, MySQL, Git, and more.  Bi-lingual professional with over 20 years of success delivering outstanding customer service in multiple areas such as technical support, retail, and medical customer service.  Excellent customer service skills concentrated on providing a professional, informed and customized experience for the client base.  Utilizing technically-sound decision making skills to ensure appropriate resolutions. Proven ability to lead and motivate a team to obtain a common project or goal.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
