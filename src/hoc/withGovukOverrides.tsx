import classNames from 'classnames';
import { ComponentType, forwardRef } from 'react';
import { OverridableComponentProps } from '../types/GovukOverrides';
import getGovukOverrideClasses from '../utils/getGovukOverrideClasses';

export default function withGovukOverrides<R, P = {}>(
  WrappedComponent: ComponentType<OverridableComponentProps<P>>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithGovukOverrides = forwardRef<
    R,
    OverridableComponentProps<P>
  >((props, ref) => {
    const { className, overrides, ...rest } = props;

    const overrideClasses = getGovukOverrideClasses(overrides);

    const classes = classNames(className, overrideClasses);

    return <WrappedComponent className={classes} ref={ref} {...(rest as P)} />;
  });

  ComponentWithGovukOverrides.displayName = `withGovukOverrides(${displayName})`;

  return ComponentWithGovukOverrides;
}
