import React from 'react'

export default function Footer() {
    return (
        <div class ="container-fluid footer">
		<div class="row">
			<div class="col-md-12 center-block text-center">
				<strong>Contact Info</strong>
				<p>hmclaudial@outlook.com</p>
				<ul class="list-inline" style={{type:'none'}}>
					<li class="list-inline-item">
						<a href="https://github.com/claudhue">
							<i class="fab fa-github" id="contactIcon"></i>
						</a>
					</li>
					<li class="list-inline-item">
						<a href="https://www.linkedin.com/in/claudia-lizette-huerta/">
						<i class="fab fa-linkedin" id="contactIcon"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
    )
}
