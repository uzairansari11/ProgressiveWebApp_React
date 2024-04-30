export default function swDev() {
	const swPath = `${process.env.PUBLIC_URL}/sw.js`;
	navigator.serviceWorker
		.register(swPath)
		.then((Response) => {
			console.warn("Service Worker Registered", Response);
		})
		.catch((error) => {
			console.error("Service Worker Error", error);
		});
}
