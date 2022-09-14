import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ data }) {
  return (
    <div className="container">
      <Navbar />
      <section className="hero" id="home">
        <div>
          <h1>Hunger Apps</h1>
          <h2>Come to save your stomach</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A in
            voluptatibus beatae nobis amet eos sint iusto culpa minima optio
            reiciendis maiores pariatur, hic laboriosam, velit totam! Alias,
            labore sapiente.
          </p>
          <button className="btn">
            <Link href="#favorite">Explore Now</Link>
          </button>
        </div>
      </section>
      <section className="card-container" id="favorite">
        <h1 className="card__title">Explore Warung Makan</h1>
        <div className="card__container">
          {data?.map((resto) => (
            <Link href={`/favorite/${resto.noResto}`} key={resto.noResto}>
              <div className="card">
                <div className="card__image">
                  <p className="location">{resto.tag}</p>
                  <Image
                    src={resto.image}
                    alt={resto.nameResto}
                    width={400}
                    height={300}
                    className="image"
                  />
                </div>
                <div className="card__desc">
                  <h3>Rating: {resto.rating}</h3>
                  <h1>{resto.nameResto}</h1>
                  <p>{resto.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/restaurant');
  const data = await res.json();
  try {
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
  }
}

// getServerSideProps
//   .then(() => console.log('fetched'))
//   .catch(() => console.log('error'));
