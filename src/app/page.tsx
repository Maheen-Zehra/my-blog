import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Home: React.FC = () =>  {
  return(
    <div>
      <Navbar />
      <Hero
  title="Explore the world of healthy Habits"
  subtitle="Blogs that are beneficial for you "
  backgroundImage="/background.jpg"
 
  primarybuttonLink="/component/blog"
  secondarybuttonLink="/component/journey"
  primaryButtonText="Start Your Adventure"
  secondaryButtonText="More Journeys"
/>

      
    </div>
  )
}
export default Home