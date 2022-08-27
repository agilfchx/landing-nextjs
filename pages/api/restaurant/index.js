import { data } from '../../../data.js';

export default function handler(req, res) {
  const httpMethod = req.method;
  const { rating, image, tag, nameResto, desc } = req.body;

  switch (httpMethod) {
    // GET Method - Get all restaurants
    case 'GET':
      res.status(200).json(data);
      break;
    // POST Method - Create a new restaurant
    case 'POST':
      res.status(200).json({
        noResto: data.length + 1,
        rating,
        image,
        tag,
        nameResto,
        desc,
      });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
}
