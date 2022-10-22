import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type RowProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'div'>
>;

const Row: FC<RowProps> = (props) => {
  const { className, children, ...rest } = props;

  const classes = classNames('govuk-grid-row', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default withGovukOverrides(Row);
