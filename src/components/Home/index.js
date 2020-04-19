import React from 'react'
import Nav from '../Nav'
import Landing from '../Landing'

export default function Home() {
    return (
    // <!--- home start -->
	<div id="home">
        <Nav/>
    {/* <!--- start landing page --> */}
        <Landing/>
    {/* <!--- start caption --> */}
	<div class="caption center-block text-center">
		<h3>Claudia Huerta</h3>
		<div class="row justify-content-center">
			<div class="col-md-4">
				<p>I am a Dallas based Full-Stack Web Developer leveraging a background in customer service to build a more intuitive user experience on the web.</p>
			</div>
		</div>
		<hr/>
		<ul class="list-inline" style={{type: "none"}}>
			<li class="list-inline-item">
				<a href="https://github.com/claudhue">
					<i class="fab fa-github" id="homeIcon"></i>
				</a>
			</li>
			<li class="list-inline-item">
				<a href="https://www.linkedin.com/in/claudia-lizette-huerta/">
				<i class="fab fa-linkedin" id="homeIcon"></i>
				</a>
			</li>
		</ul>
	</div>

</div>
);
};
