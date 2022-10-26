import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import withGovukOverrides from '../../hoc/withGovukOverrides';

export type BackLinkProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'a'>
>;

const BackLink = forwardRef<HTMLAnchorElement, BackLinkProps>((props, ref) => {
  const { className, children = 'Back', ...rest } = props;

  const classes = classNames('govuk-back-link', className);

  return (
    <a className={classes} ref={ref} {...rest}>
      {children}
    </a>
  );
});

BackLink.displayName = 'BackLink';

export default withGovukOverrides(BackLink);
