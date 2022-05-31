import React, { Component } from 'react'

export const Technologies = () => {
  return (
    <div>
      <article>
        <h2>My Experience</h2>
          <div className="grid-container">
            <div className="grid-item">
              <h3>Backend</h3>
              nodeJS
            </div>
            <div className="grid-item">
            <h3>Frontend</h3>
            react.JS 
            next.JS
            </div>
            <div className="grid-item">
            <h3>DevOps</h3>
            Docker
            Jenkins
            OpenStack
            Azure
            </div>
          </div>
      </article>
    </div>
  )
}
