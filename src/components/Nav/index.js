import React from 'react'

export default function Nav() {
    return (
        <nav class="navbar navbar-light navbar-expand-md fixed-top">
            <div class="container-fluid">
                    {/* <a class="navbar-brand" href=""><h3>CLAUDIA HUERTA</h3></a> --> */}
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


