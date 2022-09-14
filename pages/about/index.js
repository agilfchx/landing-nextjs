import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar title=" | About" />
      <section className="about">
        <div className="about_container">
          <h1>About Us</h1>
          <p>
            Hunger Apps merupakan sebuah website yang dimana akan memberikan
            sebuah rekomendasi seputar warung makan yang sangat disukai
            dikalangan masyarakat karena rasa dan harganya yang masih terjangkau
            aman
          </p>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
