import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import withGovukOverrides from '../../hoc/withGovukOverrides';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingOwnProps<T extends HeadingType> {
  as?: T;
  size?: 's' | 'm' | 'l' | 'xl';
}

export type HeadingProps<T extends HeadingType> = OverridableComponentProps<
  Omit<ComponentPropsWithoutRef<T>, keyof HeadingOwnProps<T>> & HeadingOwnProps<T>
>;

const Heading = <T extends HeadingType = 'h1'>(props: HeadingProps<T>) => {
  const { as = 'h1', className, size = 'l', children, ...rest } = props;

  const classes = classNames(`govuk-heading-${size}`, className);

  const Component = as;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default withGovukOverrides(Heading);
