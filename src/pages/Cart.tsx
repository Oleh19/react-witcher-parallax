import { FC } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/image/cart.jpeg';
import logo from '../assets/image/logo.png';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addTour, minusTour, clearTour } from '../redux/slice/tourSlice';
import { addHunt, minusHunt, clearHunt } from '../redux/slice/huntSlice';
import { addWitchers, minusWitcher, clearWitchers } from '../redux/slice/witchersSlice';

export const Cart: FC = () => {
  const { huntSlice, tourSlice, witchersSlice } = useAppSelector((state) => state.persistedReducer);
  const tours = tourSlice.tours;
  const hunts = huntSlice.hunts;
  const witchers = witchersSlice.witchers;

  const dispatch = useAppDispatch();

  const onClickClean = () => {
      dispatch(clearTour());
      dispatch(clearWitchers());
      dispatch(clearHunt())
  };

  return (
    <div className="wrapper">
      <img src={bg} alt="background" className="background" style={{ opacity: 1 }} />
      <div className="cart-box">
        <Link className="cart-back" to="/">
          <img src={logo} alt="" className="cart-icon" />
        </Link>
        <button onClick={onClickClean} className="cleanCart-box">
          <div className="cleanCart">Clean</div>
        </button>
        <div className="totalPrice-box">
          <div className="totalPrice">
            {tourSlice.tourPrice + huntSlice.huntPrice + witchersSlice.priceWitchers} {''}
            florens
          </div>
        </div>
        {tours.map(
          (tour) =>
            tour.count > 0 && (
              <div key={tour.id} className="cart-border">
                <div className="cart-content-box">
                  <img src={tour.image} alt={tour.title} className="cart-image" />
                  <div className="cart-name">{tour.title}</div>
                  <div className="cart-count">
                    <AiFillPlusCircle
                      className="plus"
                      onClick={() => dispatch(addTour({ ...tour }))}
                    />
                    <AiFillMinusCircle
                      className="minus"
                      onClick={() => dispatch(minusTour(tour.id))}
                    />
                  </div>
                  <div className="cart-price">{tour.count}</div>
                  <div className="cart-price">{tour.price * tour.count}</div>
                </div>
              </div>
            ),
        )}
        {hunts.map(
          (hunt) =>
            hunt.count > 0 && (
              <div key={hunt.id} className="cart-border">
                <div className="cart-content-box">
                  <img src={hunt.image} alt={hunt.title} className="cart-image" />
                  <div className="cart-name">{hunt.title}</div>
                  <div className="cart-count">
                    <AiFillPlusCircle
                      className="plus"
                      onClick={() => dispatch(addHunt({ ...hunt }))}
                    />
                    <AiFillMinusCircle
                      className="minus"
                      onClick={() => dispatch(minusHunt(hunt.id))}
                    />
                  </div>
                  <div className="cart-price">{hunt.count}</div>
                  <div className="cart-price">{hunt.price * hunt.count}</div>
                </div>
              </div>
            ),
        )}

        {witchers.map(
          (witcher) =>
            witcher.count > 0 && (
              <div key={witcher.id} className="cart-border">
                <div className="cart-content-box">
                  <img src={witcher.image} alt={witcher.title} className="cart-image" />
                  <div className="cart-name">{witcher.title}</div>
                  <div className="cart-count">
                    <AiFillPlusCircle
                      className="plus"
                      onClick={() => dispatch(addWitchers({ ...witcher }))}
                    />
                    <AiFillMinusCircle
                      className="minus"
                      onClick={() => dispatch(minusWitcher(witcher.id))}
                    />
                  </div>
                  <div className="cart-price">{witcher.count}</div>
                  <div className="cart-price">{witcher.price * witcher.count}</div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};
