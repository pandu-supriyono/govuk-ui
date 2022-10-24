import Column from './Column';
import Row from './Row';

export type { ColumnProps } from './Column';
export * from './Row';

const Grid = Object.assign(Row, {
  Column,
  Row,
});

export default Grid;
