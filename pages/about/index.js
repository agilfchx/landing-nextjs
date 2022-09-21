import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Form from '../../components/Form/Form';

export default function About() {
  return (
    <div>
      <Navbar title=" | About" />
      <section className="about">
        <div className="about_container">
          <h1>Ingin mengetahui kami lebih lanjut?</h1>
          <p>Isi form dibawah ini dan kami akan mengabari anda</p>
          <Form />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
