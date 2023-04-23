import Header  from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Features from "./components/Features";
import Project from "./components/Project";
import Newsletter from "./components/Newsletter";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
// import BTT from "./components/BTT";

const App = () => (
  <div id="top">
    <Header/>

    <main>
        <article>
            <Hero />
             <Services />
            <Features />
           <Project />
           <Newsletter />
            <Blog />
            

        </article>
    </main>

    <Footer />

    {/* <BTT /> */}

  
  </div>
);

export default App;
