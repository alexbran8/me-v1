import React from 'react'

import "./projects.css"

export const Projects = () => {
  return (
    <div>
      <article>
        <h2>Projects</h2>
        <div className="grid-container">
          <div className="grid-item">
            <a href="https://alexbran8.github.io/react-tensorflow-wall-project/" target="blank">
              <h3>The Wall</h3>
              <div className="grid-item-footer">
              <div className="description">Object detection</div>
                <h6>PWA react.JS tensorflow.JS</h6>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://alexbran8.github.io/photo-galleries/" target="blank">
              <h3>Galleries</h3>
              <div className="grid-item-footer">
              <div className="description">Different gallery implementations</div>
                <h6>react.JS</h6>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <a href="" target="blank">
              <h3>Planning</h3>
              <div className="grid-item-footer">
              <div className="description">Resource and Activity Management and Reporting</div>
                <h6>node.JS, react.JS, docker, jenkins, postgreSQL</h6>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <a href="" target="blank">
              <h3>CRM</h3>
              <div className="grid-item-footer">
              <div className="description">CRUD for operations management and reporting</div>
                <h6>node.JS, react.JS, docker, jenkins, postgreSQL</h6>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <a href="" target="blank">
              <h3>CHARTS</h3>
              <div className="grid-item-footer">
              <div className="description">Inputs XLS and XML files and processes data to charts</div>
                <h6>node.JS, react.JS, docker, jenkins, postgreSQL</h6>
              </div>
            </a>
          </div>
          {/* <div className="grid-item">
            <a href="https://alexbran8.github.io/photo-galleries/" target="blank">
              <h3>The NavBar Project</h3>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://alexbran8.github.io/photo-galleries/" target="blank">
              <h3>The Footer Project</h3>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://alexbran8.github.io/photo-galleries/" target="blank">
              <h3>The Article Project</h3>
            </a>
          </div> */}
        </div>
      </article>
    </div>
  )
}
