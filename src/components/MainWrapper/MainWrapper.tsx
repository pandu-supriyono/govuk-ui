import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type MainWrapperProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'div'>
>;

const MainWrapper = forwardRef<HTMLElement, MainWrapperProps>((props, ref) => {
  const { className, id = 'main-content', children, ...rest } = props;

  const classes = classNames('govuk-main-wrapper', className);

  return (
    <main id={id} className={classes} ref={ref} {...rest}>
      {children}
    </main>
  );
});

MainWrapper.displayName = 'MainWrapper';

export default withGovukOverrides(MainWrapper);
