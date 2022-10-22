import Column from './Column';
import Row from './Row';

export * from './Column';
export * from './Row';

const Grid = Object.assign(Row, {
  Column,
  Row,
});

export default Grid;
