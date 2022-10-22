import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import WithGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

interface BodyOwnProps {
  size?: 's' | 'l';
}

export type BodyProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'p'> & BodyOwnProps
>;

const Body: FC<BodyProps> = (props) => {
  const { size, className, children, ...rest } = props;
  const classes = classNames(
    {
      'govuk-body': !size,
      [`govuk-body-${size}`]: !!size,
    },
    className,
  );

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};

export default WithGovukOverrides(Body);
