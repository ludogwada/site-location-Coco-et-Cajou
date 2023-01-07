import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import HeaderLeft from '../layout/HeaderLeft';

const Dispo = () => {
	return (
		<>
			<HeaderLeft />
			<Header />
			<main>
				<article className='calendar'>
					<iframe
						title='Tarifs et disponibilités'
						src='https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FPuerto_Rico&showPrint=0&showTabs=0&showCalendars=0&showTz=0&title=Tarifs%20et%20disponibilit%C3%A9s&src=YjhkZDBjMmRhY2FjMWQyMjYyMWE2YjAwZmI5YzliOTkzZjQwOTg5MWVmYTQxOWUzZWRlMDE3NzA1MmVmMDk3Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NjM5ZGYxMzY5OGJmYzcyZDRhMWUyY2EwYjdiZmI0ZDAzMGYwOTViOWE0N2YyNWRjZDBmNDJmYmMyZmVmZmIyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=N2EzMWI5MDUwMjZhYzlhZDYwODRhMTIxNTdkZDUzNzIwYjQyNjI2NDY2ZjhlZDI5MjAxMGIxOWU1NWY1ODk4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MzIwOTBlYjZkNTA0NWM3NTdmYjIxMDFjMzQ0OTQyYjA2NTU1OTI5NzY4M2QxNmYwMmM1NDI3NWQ2MmZhYzZkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D81B60&color=%23E67C73&color=%23009688&color=%237CB342'
						width='600'
						height='550'></iframe>
				</article>
			</main>
			<Footer />
		</>
	);
};

export default Dispo;
