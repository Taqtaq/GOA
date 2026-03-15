// DOM არის ვებ-გვერდის რეალური სტრუქტურა, რომელსაც ბრაუზერი ქმნის HTML-დან.
// როცა გვერდზე რაღაც იცვლება, ბრაუზერს უწევს ამ რეალურ სტრუქტურაში ცვლილების შეტანა.

// Virtual DOM არის ამ DOM-ის მსუბუქი, ვირტუალური ასლი, რომელსაც React იყენებს.
// ჯერ ცვლილება ხდება Virtual DOM-ში, შემდეგ React ადარებს ძველ და ახალ ვერსიებს და მხოლოდ საჭირო ნაწილს ანახლებს რეალურ DOM-ში.

// განსხვავება:

// DOM — რეალური გვერდის სტრუქტურაა

// Virtual DOM — React-ის მიერ შექმნილი დროებითი ასლია

// DOM-ში ხშირი ცვლილებები უფრო ნელია

// Virtual DOM მუშაობას აჩქარებს, რადგან მხოლოდ საჭირო ელემენტებს აახლებს

// მარტივად:

// თუ მთლიან ოთახს ვალაგებთ — ეს ჰგავს DOM-ს.
// თუ ჯერ გეგმაში ვნახეთ რა არის შესაცვლელი და მერე მხოლოდ ის შევცვალეთ — ეს ჰგავს Virtual DOM-ს.

//3
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>My name is Andre.</p>
      <p>I am learning React.</p>
      <img
        src="https://via.placeholder.com/150"
        alt="My profile"
      />
      <br />
      <button>Contact Me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <AboutMe />
    </div>
  );
}

root.render(<App />);
//4
import React from 'react';
import { createRoot } from 'react-dom/client';


const isLoggedIn = true;

function App() {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>About Me</h1>
          <p>My name is Andre.</p>
          <p>I am learning React.</p>
          <button>My Button</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}

root.render(<App />);