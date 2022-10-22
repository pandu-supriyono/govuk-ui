import classNames from 'classnames';
import { ComponentType } from 'react';
import { OverridableComponentProps } from '../types/GovukOverrides';
import getGovukOverrideClasses from '../utils/getGovukOverrideClasses';

export default function withGovukOverrides<P = {}>(
  WrappedComponent: ComponentType<OverridableComponentProps<P>>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithGovukOverrides = (props: OverridableComponentProps<P>) => {
    const { className, overrides, ...rest } = props;

    const overrideClasses = getGovukOverrideClasses(overrides);

    const classes = classNames(className, overrideClasses);

    return <WrappedComponent className={classes} {...(rest as P)} />;
  };

  ComponentWithGovukOverrides.displayName = `withGovukOverrides(${displayName})`;

  return ComponentWithGovukOverrides;
}
