import React from 'react';
import Header from '../layout/Header';

const Dispo = () => {
	return (
		<>
			<Header />
			<section className='calendar'>
				<iframe
					title='cajouCalendar'
					src='https://calendar.google.com/calendar/embed?height=500&wkst=2&bgcolor=%23ffffff&ctz=America%2FPuerto_Rico&title=Disponibilit%C3%A9s&showTabs=0&showPrint=0&showTz=0&showCalendars=1&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Z245NTdzOGFhdGhqbGFnYWhwcThvY2NiMGFsOHQ1NTZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=M2c0czFrMHJrYW9rZmxkcDU1bmxycDk5ZjB2ZGZibWJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23009688&color=%234285F4&color=%23E67C73'
					width='600'
					height='500'></iframe>
				<span> </span>
			</section>
		</>
	);
};

export default Dispo;
