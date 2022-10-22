import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type WidthContainerProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'div'>
>;

const WidthContainer: FC<WidthContainerProps> = (props) => {
  const { className, children, ...rest } = props;

  const classes = classNames('govuk-width-container', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default withGovukOverrides(WidthContainer);
