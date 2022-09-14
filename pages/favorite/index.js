import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Favorite({ data }) {
  return (
    <>
      <Navbar />
      <section className="card-container" id="favorite">
        <h1 className="card__title">Warung Makan Ter-favorite</h1>
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
    </>
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
