import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import { GovukWidth } from '../../types/Width';

export interface ColumnOwnProps {
  width?: GovukWidth;
}

export type ColumnProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'div'> & ColumnOwnProps
>;

const Column: FC<ColumnProps> = (props) => {
  const { className, width = 'two-thirds', children, ...rest } = props;

  const classes = classNames(`govuk-grid-column-${width}`, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default withGovukOverrides(Column);
