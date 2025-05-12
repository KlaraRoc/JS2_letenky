import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Flights } from '../components/Flights';


document.querySelector('#root').innerHTML = render(
  <main>
    <Flights
      cityFrom='Praha'
      cityTo='Londýn'
      timeFrom='3. srpna 2022, 13:30'
      timeTo='3. srpna 2022, 14:00'
    />

    <Flights
      cityFrom='Praha'
      cityTo='Londýn'
      timeFrom='3. srpna 2022, 13:30'
      timeTo='3. srpna 2022, 14:00'
    />

  </main>
);
