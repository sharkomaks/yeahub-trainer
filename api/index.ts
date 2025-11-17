export default async function handler(req, res) {
	const url = `https://api.yeatwork.ru/${req.url}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		res.json(data);
	} catch {
		res.status(500).json({ error: 'Failed' });
	}
}
