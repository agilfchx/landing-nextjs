import { data } from '../../../data.js';

export default function handler(req, res) {
  const httpMethod = req.method;
  const { rating, image, tag, nameResto, desc } = req.body;
  const id = req.query.id;
  const result = data.filter((resto) => resto.noResto === parseInt(id));

  switch (httpMethod) {
    // GET Method - Get only one restaurant
    case 'GET':
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: 'Restaurant not found',
        });
      }
      break;
    // PUT Method - Update a restaurant
    case 'PUT':
      if (result.length > 0) {
        res.status(200).json({
          noResto: result.noResto,
          rating,
          image,
          tag,
          nameResto,
          desc,
        });
      } else {
        res.status(404).json({
          message: 'Not Found',
        });
      }
      break;
    // DELETE Method - Delete a restaurant
    case 'DELETE':
      if (result.length > 0) {
        data.splice(data.indexOf(result[0]), 1);
        res.status(200).json({
          message: 'Restaurant deleted',
        });
      } else {
        res.status(404).json({
          message: 'Not Found',
        });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
}
