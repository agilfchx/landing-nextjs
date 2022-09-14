import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export default function Favorite({ data }) {
  return (
    <>
      <Navbar title={` | ${data[0].nameResto} `} />
      <h1 className="menu__title">{data[0].nameResto}</h1>
      {data?.map((resto, idx) => (
        <>
          <section className="cardmenu-container" id="favorite" key={idx}>
            {resto?.menu?.map((menus) => (
              <div key={menus.noMenu}>
                <div className="cardmenu">
                  <div className="card__image">
                    <Image
                      src={menus.image}
                      alt={menus.namaMenu}
                      width={400}
                      height={300}
                      className="image"
                    />
                  </div>
                  <div className="cardmenu__desc">
                    <h1>{menus.nameMenu}</h1>
                    <p>Rp{menus.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      ))}
      {/* <Footer /> */}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    'http://localhost:3000/api/restaurant/' + params.restoId
  );
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
