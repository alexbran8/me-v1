import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import "./Projects.scss";

let projects = require("./projects-data.json");

export const Projects = () => {
  return (
    <div>
      <article>
        <div className="grid-container">
          {projects &&
            projects.map((item, index) => (
              <div key={index} className="grid-item">
                <div
                  className="badge"
                  data-label={item.status ? item.status : "WIP"}
                />
                <span title="Click to open app">
                  <a href={item.URL} target="blank">
                    <h3>{item.projectName}</h3>
                  </a>
                </span>
                <div className="description">{item.description}</div>
                <div className="photo-wrapper">
                  <iframe
                    frameBorder="0"
                    scrolling="no"
                    className="responsive-iframe"
                    src={item.URL}
                  />
                </div>
                <div className="grid-item-footer">
                 
                  <h6>
                    <a href={item.URL_repo} target="blank">
                      <span title="Click to open repo">
                        <FaCodeBranch />
                        {item.technologies}
                      </span>
                    </a>
                  </h6>
                </div>
              </div>
            ))}

          <div className="grid-item">
            {/* <a href="" target="blank"> */}
            <h3>Planning</h3>
            <div className="grid-item-footer">
              <div className="description">Resource and Task Management</div>
              <h6>PERN</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            {/* <a href="" target="blank"> */}
            <h3>CRM</h3>
            <div className="grid-item-footer">
              <div className="description">CRUD for operations management</div>
              <h6>PERN</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            {/* <a href="" target="blank"> */}
            <h3>Analytics</h3>
            <div className="grid-item-footer">
              <div className="description">
                XLS and XML = () => react.charts2.js
              </div>
              <h6>PERN</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="50%" />
            {/* <a href="" target="blank"> */}
            <h3>MicroFronteds</h3>
            <div className="grid-item-footer">
              <div className="description">
                Developmment of MF arhitecture for react UIs. UVT Summer
                Practice 2022.
              </div>
              <h6>react & redux</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="Planning" />
            {/* <a href="" target="blank"> */}
            <h3>Tools Management</h3>
            <div className="grid-item-footer">
              <div className="description">
                Issue requests, access tools, see status. UVT II.S2 Group
                Projects
              </div>
              <h6>nextJS</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="PoC" />
            {/* <a href="" target="blank"> */}
            <h3>Talent Mangement</h3>
            <div className="grid-item-footer">
              <div className="description">
                Management of university colaboration projects. (UVT II.S1
                Individual Projects)
              </div>
              <h6>react & node</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="WIP" />
            {/* <a href="" target="blank"> */}
            <h3>Dev & Production ENV</h3>
            <div className="grid-item-footer">
              <div className="description">
                Dev Env = (tests) => production env
              </div>
              <h6>OpenStack & Jenkins & Docker</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="Planning" />
            {/* <a href="" target="blank"> */}
            <h3>Disaster Recovery</h3>
            <div className="grid-item-footer">
              <div className="description">
                (re)build everything in case of disaster
              </div>
              <h6>Terraform ???</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="75%" />
            {/* <a href="" target="blank"> */}
            <h3>art e-commerce</h3>
            <div className="grid-item-footer">
              <div className="description">
                e-commerce for paintings, books and cooking ideas
              </div>
              <h6>PERN</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="WIP" />
            {/* <a href="https://alexbran8.github.io/photo-galleries/" target="blank"> */}
            <h3>Galleries</h3>
            <div className="grid-item-footer">
              <div className="description">
                Different gallery implementations
              </div>
              <h6>react</h6>
            </div>
            {/* </a> */}
          </div>
          <div className="grid-item">
            <div className="badge" data-label="WIP" />
            <a href="https://alexbran8.github.io/me" target="blank">
              <h3>Serverless Backend</h3>
              <div className="grid-item-footer">
                <div className="description">
                  How to get started with serverless?
                </div>
                <h6>serverless, node, aws</h6>
              </div>
            </a>
          </div>
          <div className="grid-item">
            <div className="badge" data-label="POC" />
            <a href="https://alexbran8.github.io/me" target="blank">
              <h3>Serverless E-Commerce</h3>
              <div className="grid-item-footer">
                <div className="description">
                  This is just an idea, but it might work?!
                </div>
                <h6>serverless, node, aws</h6>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
