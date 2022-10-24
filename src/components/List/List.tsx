import classNames from 'classnames';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import withGovukOverrides from '../../hoc/withGovukOverrides';

type ListType = 'ul' | 'ol';

interface ListOwnProps<T extends ListType> {
  as?: T;
  type?: 'bullet' | 'number';
  spaced?: boolean;
  children?: ReactNode;
}

export type ListProps<T extends ListType> = OverridableComponentProps<
  Omit<ComponentPropsWithoutRef<T>, keyof T> & ListOwnProps<T>
>;

const List = <T extends ListType = 'ul'>(props: ListProps<T>) => {
  const { as = 'ul', className, type, children, spaced, ...rest } = props;

  const classes = classNames(
    'govuk-list',
    {
      [`govuk-list--${type}`]: !!type,
      'govuk-list--spaced': spaced,
    },
    className,
  );

  const Component = as;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default withGovukOverrides(List);
