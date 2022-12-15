import React from "react";
class Header extends React.Component {
  render() {
    return (
      <header class="sixteen columns head">
        <div class="container">
          <div class="sixteen columns">
            <h1>SkillShot AB</h1>
            <nav>
              <ul id="menu" class="tabs">
                <li>
                  <a href="#start" class="active">
                    Start
                  </a>{" "}
                </li>
                <li>
                  <a href="#cv">CV Hans Törnquist</a>{" "}
                </li>
                <li>
                  <a href="#contact">Contact</a>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
