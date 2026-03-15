import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

/*
კომპონენტი არის React-ის ფუნქცია რომელიც აბრუნებს JSX-ს.
კომპონენტები გვაძლევს საშუალებას კოდი გავყოთ პატარა ნაწილებად
რომ აპლიკაცია იყოს უფრო ორგანიზებული და ადვილად სამართავი.
*/

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}