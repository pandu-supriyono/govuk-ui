import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import withGovukOverrides from '../../hoc/withGovukOverrides';

type CaptionType = 'div' | 'span';

interface CaptionOwnProps<T extends CaptionType> {
  as?: T;
  size?: 'm' | 'l' | 'xl';
}

export type CaptionProps<T extends CaptionType> = OverridableComponentProps<
  Omit<ComponentPropsWithoutRef<T>, keyof CaptionOwnProps<T>> &
    CaptionOwnProps<T>
>;

const Caption = <T extends CaptionType = 'span'>(props: CaptionProps<T>) => {
  const { as = 'span', className, size = 'l', children, ...rest } = props;

  const classes = classNames(`govuk-caption-${size}`, className);

  const Component = as;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default withGovukOverrides(Caption);
