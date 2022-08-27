import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR('/api/restaurant', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) {
    return <div>Loading...</div>;
  }
  if (data) {
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
              <div className="card" key={resto.noResto}>
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
            ))}
          </div>
        </section>
        <section>
          <div className="footer">
            <footer>
              <p>Copyright &copy; {new Date().getFullYear()} - Hunger Apps</p>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/restaurant');
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
