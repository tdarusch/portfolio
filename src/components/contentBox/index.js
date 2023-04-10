import React from 'react';
import './contentBox.css';

export default function ContentBox() {
  return (
    <div class="container">
      <div class="sub-container">
        <div class="content-container">
            <div class="content-head">Vertex-Based Wound Simulation</div>
            <div class="content-body">
              Developing new computational models for wound healing under Dr. Malmi-Kakkada &#38; Dr. Dawson of the DC&#38;P at Augusta University <hr class="contentline"></hr>
              Work began in May 2022 through the Center for Undergraduate Research & Scholarship SSP, culimating in a symposium presentation in July 2022, a conference presentation in March 2023, and a second symposium presentation scheduled for July 2023.
              Currently, we are finalizing data analysis and shifting our efforts toward compiling our findings into a formal paper.
              <div class="content-footer" id="footer1">
                <span class="stacktxt">Stack: </span> <span class="cpptxt">C++</span>, <span class="mltxt">MATLAB</span>, <span class="pythontxt">Python</span>
              </div>
              </div>
        </div>
        <div class="content-container">
            <div class="content-head">Romulus</div>
            <div class="content-body">
              Chess Engine & Novel Computer Player Model <hr class="contentline"></hr>
              Developed using the .NET Windows SDK & C&#35, this project encompasses both the framework for gameplay and an advanced, novel analytical model for a computer-based player
              &#40;akin to Deep Blue @ CMU&#41;. As of April 2023, backend and visual rendering are complete with a rudimentary computer player. Currently, I am exploring the non-computational
              literature surrounding the game to better understand scoring, attack/defense schemas, and other critical paradigms.
              <div class="content-footer" id="footer2">
                <span class="stacktxt">Stack: </span><span class="cstxt">C#</span>, .NET SDK
              </div>
            </div>
        </div>
        <div class="content-container">
            <div class="content-head">Site Expansion</div>
            <div class="content-body">
              Adding functionality, small interactive projects/demos, and automated documentation to this site <hr class="contentLine"></hr>
              While I have used vanilla HTML/CSS &#38; JS via jQuery, this is my first hands-on project with React & Node.js. I aim to add significantly more interactive projects/elements
              to this site alongside creating an automated documentation generator for my work similar to Doxygen and others. 
              <div class="content-footer" id="footer3">
                <span class="stacktxt">Stack: </span> <span class="reacttxt">React</span>, <span class="nodetxt">Node.js</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
