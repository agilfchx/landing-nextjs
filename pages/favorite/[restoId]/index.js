import Navbar from '../../../components/Navbar';
import { useState, useEffect } from 'react';
import { FaRegTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Favorite({ data }) {
  const [counter, setCounter] = useState(data.map((resto) => 0));

  const incrementCount = (index) => {
    if (counter[index] >= 0) {
      counter[index]++;
      setCounter([...counter]);
    } else {
      counter[index] = 1;
      setCounter([...counter]);
    }
  };

  const decrementCount = (index) => {
    if (counter[index] > 1) {
      counter[index]--;
      setCounter([...counter]);
    } else {
      counter[index] = 0;
      setCounter([...counter]);
    }
  };

  const deleteCount = (index) => {
    counter[index] = 0;
    setCounter([...counter]);
  };

  return (
    <>
      <Navbar title={` | ${data[0].nameResto} `} />
      <h1 className="menu__title">{data[0].nameResto}</h1>
      {data?.map((resto, idx) => (
        <>
          <section className="cardmenu-container" id="favorite" key={idx}>
            {resto?.menu?.map((menus, i) => (
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
                    <div className="counterItem">
                      <div className="operation">
                        <div className="trash" onClick={() => deleteCount(i)}>
                          <FaRegTrashAlt />
                        </div>
                        <div className="decr" onClick={() => decrementCount(i)}>
                          <FaMinusCircle />
                        </div>
                        <span className="num">{counter[i]}</span>
                        <div className="incr" onClick={() => incrementCount(i)}>
                          <FaPlusCircle />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      ))}
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
