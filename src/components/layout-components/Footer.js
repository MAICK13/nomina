import React from 'react'
import { APP_NAME } from 'configs/AppConfig';

export default function Footer() {
	return (
		<footer className="footer">
			<span>Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-weight-semibold">{`${APP_NAME}`}</span> Todos los derechos reservados.</span>

		</footer>
	)
}

