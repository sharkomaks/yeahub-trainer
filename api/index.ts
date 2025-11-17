export default async function handler(req, res) {
	const baseUrl = process.env.VITE_SERVER_URL;
	const path = req.url.replace('/api/', '');
	const url = `${baseUrl}/${path}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		res.json(data);
	} catch {
		res.status(500).json({ error: 'Failed' });
	}
}
