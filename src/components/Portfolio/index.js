import React from 'react'
import Logo1 from "../Images/passwordG.png";
import Logo2 from "../Images/codeQuiz.png";
import Logo3 from "../Images/budget.png"

export default function Portfolio() {
    return (
        <div id="portfolio">
            <div class="container-fluid">
                <h3 class="heading">Portfolio</h3>
                <div class="row no-padding justify-content-center">
                    <div class="col-md-4">
                        <a href="https://claudhue.github.io/03-Password-Generator/">
                        <img src= {Logo1} alt="img1" height="200" width="400"/>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="https://claudhue.github.io/04-Code-Quiz/">
                        <img src= {Logo2} alt="img2" height="200" width="400"/>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <a href="https://young-gorge-86159.herokuapp.com/">
                        <img src={Logo3} alt="img3" height="200" width="400"/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
