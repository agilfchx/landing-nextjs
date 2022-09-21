import Image from 'next/image';
import Link from 'next/link';

export default function Card({ image, noResto, nameResto, rating, tag, desc }) {
  return (
    <section className="card-container" id="favorite">
      <h1 className="card__title">Explore Warung Makan</h1>
      <div className="card__container">
        <Link href={`/favorite/${noResto}`}>
          <div className="card">
            <div className="card__image">
              <p className="location">{tag}</p>
              <Image
                src={image}
                alt={nameResto}
                width={400}
                height={300}
                className="image"
              />
            </div>
            <div className="card__desc">
              <h3>Rating: {rating}</h3>
              <h1>{nameResto}</h1>
              <p>{desc}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
