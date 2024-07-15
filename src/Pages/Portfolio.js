import Navbar from "../components/navbar";
import "../css/portfolio.css"
import React, {useState} from 'react';
//Have the portfolios in cards or grids




function Portfolio()
{
    const Grid=()=>{
        const[expandedItem, setExpandedItem] = useState(null);
    
    const handleClick = (index) => {
        setExpandedItem(index === expandedItem ? null : index);
    };
        const handleOutsideClick=(e) =>
        {
            if (e.target.className === 'portfolio-continer'){
                setExpandedItem(null);
            }
        }
    }
    return(
        <div>
            <Navbar/>
            <h1>Portfolio</h1>
            <p>Hello! This is where I place and categorize all of the projects I have done throughout the years</p>
            <div className="portfolio-container">
            <div className="Portfolios">
            <p className = "project_title"> Automatic Billiard Laser Referee </p>
            <p className="languages_used">C#, Arduino</p>
            <p className="portfolio_description">The automatic billiard laser is a C# program, that by the end of it, should be able to point to 
                shots and be able to redo the shots of said player. When the player wants to redo a shot, the program should be able to where the balls 
                were located previously.
            </p>
            <p>https://github.com/GreasyPizzaToppings/Billiard-Laser.git</p>
            </div>
            <div className="Portfolios">
            <p className = "project_title"> Europa Universalis 4 (EU4) Idea Randomizer</p>
            <p className="languages_used">HTML, CSS, Javascript</p>
            <p className="portfolio_description">
                This program was created as we wanted to randomize ideas for our sessions. We played and built nations based on the ideas given by this program. 
            </p>
            <p>https://github.com/B-Ascii/eu4Assistant.git</p>
            </div>
            <div className="Portfolios">
            <p className = "project_title"> Pub Quiz Buster</p>
            <p className="languages_used">C#</p>
            <p className="portfolio_description">
                This is a program that is comprised of three quizzes. The three quizzes contained in this program are 
                - Music quiz where you guess which decade the music is being played
                - A country puzzle game where you match the location of the country, and correctly shape the country based on the country's population
                - A match-up game where you match the inventor and their inventions
            </p>
            <p>https://github.com/TikiTikiPlus/COMPX242_JigsawPuzzle.git</p>
            </div>
            <div className="Portfolios">
            <p className = "project_title">Man in the Middle simulation</p>
            <p className="languages_used">Java</p>
            <p className="portfolio_description">
                This project was created due to my curiousity of how a man in the middle attack would work. A client, and server would be setup. Then a "MITM" is setup to listen 
                to the server, send the message to the client, then the client would communicated to the MITM, and send the message back to the server. The MITM server would 
                get the keys used inbetween the messages in order to decrypt what is being sent and received.
            </p>
            <p>https://github.com/TikiTikiPlus/MITMSimulation.git</p>
            </div>
            <div className="Portfolios">
            <p className = "project_title">Regex Compiler</p>
            <p className="languages_used">Java</p>
            <p className="portfolio_description">
                Worked with a friend of mine as a challenge. We saw this as one of the leetcode challenge and wanted to try and create one of our own. 
                There are two parts to this project, one part which handles the prioritization of expression, and the other which finds the lines that contained the regex.
            </p>
            <p>https://github.com/TikiTikiPlus/RegexCompiler.git</p>
            </div>
            <div className="Portfolios">
            <p className = "project_title">Multitasking Kernel</p>
            <p className="languages_used">Assembly</p>
            <p className="portfolio_description">
                Created a multitasking kernel program where the programs flips between three programs based on a time slice. Closing all three programs would lead to a message saying idle. 
                <break></break>
                <b>Required program:</b> Wramp.
            </p>
            <p>https://github.com/TikiTikiPlus/MultiTaskingKernel.git</p>
            </div>
            <div className="Portfolios">
            <p className = "project_title">Simple Movie Display</p>
            <p className="languages_used">PHP, CSS, Javascript</p>
            <p className="portfolio_description">
                Created a simple program that displays movie descriptions. You can sort the movies based on date, name, and ratings. I used a JSON file to store the movie 
                stats. 
            </p>
            <p>https://github.com/TikiTikiPlus/MovieSorting.git</p>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;