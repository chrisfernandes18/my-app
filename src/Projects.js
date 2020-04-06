import React from 'react';
import './App.css';

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <div className="project-cards-container">
                <a href="https://github.com/chrisfernandes18/Command-Line-MAL" target="blank_" rel="noopener noreferrer">
                    <div className="card-container">
                        <h3>Command Line MAL</h3>
                        <p>Search MyAnimeList.net from the command line and save searches into a csv file.</p>
                        <div className="tech-container">
                            <hl>
                                Python
                            </hl>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </a>
                <a href="https://github.com/chrisfernandes18/Jisho" target="blank_" rel="noopener noreferrer">
                    <div className="card-container">
                        <h3>Jisho</h3>
                        <p>Search up Japanese words on Jisho from the command line.</p>
                        <div className="tech-container">
                            <hl>
                                Python
                            </hl>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;