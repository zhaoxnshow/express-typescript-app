import { Handler } from "../types";
import fs from 'fs';

export const style: Handler = (req, res) => {
  const styles = fs.readFileSync('./data/styles.xml', 'utf-8');
  console.log(styles);
  res.status(200).send(styles);
};
