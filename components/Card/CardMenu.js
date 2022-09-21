import Image from 'next/image';
import { FaRegTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

export default function Card({ image, noMenu, nameMenu, price }) {
  return (
    <section className="cardmenu-container" id="favorite" key={idx}>
      <div key={noMenu}>
        <div className="cardmenu">
          <div className="card__image">
            <Image
              src={image}
              alt={nameMenu}
              width={400}
              height={300}
              className="image"
            />
          </div>
          <div className="cardmenu__desc">
            <h1>{nameMenu}</h1>
            <p>Rp{price}</p>
            <div className="counterItem">
              <div className="operation">
                <div className="trash" onClick={() => setCounter(0)}>
                  <FaRegTrashAlt />
                </div>
                <div className="decr" onClick={() => decrement()}>
                  <FaMinusCircle />
                </div>
                <span className="num">{menus.counterVal}</span>
                <div className="incr" onClick={() => increment()}>
                  <FaPlusCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
