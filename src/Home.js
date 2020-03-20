import React from 'react';
import './App.css';
import pdf from './assets/resume/christian-bjerre-fernandes.pdf';
import finnJake from './assets/adventuretime/finn_jake.png';

function Home(props) {
  return (
    <div>
      <h1>Christian Bjerre-Fernandes</h1>
      <img src={finnJake} width="250" height="200" alt="Finn and Jake"></img>
      <div className="paragraph">
        <p>
          Hello! My name is Christian Bjerre-Fernandes. I am currently a third-year 
          student at the <a href="https://www.uchicago.edu/">University of Chicago</a>,
          studying computer science. In addition to computer science, I love to study languages, 
          and learn about other cultures.
          <br></br>
          <br></br>
          On campus, I am a part of <a href="https://equalopportunityprograms.uchicago.edu/title-ix/rsvp-programming-center/">Resources for Sexual Violence Prevention (RSVP)
          </a>, <a href="https://www.facebook.com/UChicagoTheMark/">The Mark</a>, and <a href="https://uncommonhacks.com/">Uncommon Hacks</a>.
          Besides school and work, I love to participate in intramural sports with my house (Ultimate Frisbee, Foosball, Inner Tube Waterpolo, etc),
          play super smash bros ultimate (SSBU), watch movies (The Prestige, Lincoln Lawyer, etc.) and shows (Bojack Horseman, Love is Blind, etc.),
          and photography.
          <br></br>
          <br></br>
          <a href={pdf} target="_blanks">Here</a> is my resume!
        </p>
      </div>
    </div>
  )
}
 
export default Home;