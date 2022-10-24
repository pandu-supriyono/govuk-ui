import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

interface LinkOwnProps {
  colour?: 'muted' | 'text-colour' | 'inverse';
  noUnderline?: boolean;
  noVisitedState?: boolean;
}

export type LinkProps = OverridableComponentProps<
  LinkOwnProps & Omit<ComponentPropsWithoutRef<'a'>, keyof LinkOwnProps>
>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, colour, noUnderline, noVisitedState, children, ...rest } =
    props;

  const classes = classNames(
    'govuk-link',
    {
      [`govuk-link--${colour}`]: !!colour,
      'govuk-link--no-underline': noUnderline,
      'govuk-link--no-visited-state': noVisitedState,
    },
    className,
  );

  return (
    <a className={classes} ref={ref} {...rest}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export default withGovukOverrides(Link);
