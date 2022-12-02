import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type LegendProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'legend'>
> & {
  size?: 's' | 'm' | 'l' | 'xl';
  heading?: boolean;
};

const Legend: FC<LegendProps> = (props) => {
  const { className, size, heading, children, ...rest } = props;

  const classes = classNames(
    'govuk-fieldset__legend',
    {
      [`govuk-fieldset__legend--${size}`]: !!size,
    },
    className,
  );

  return (
    <legend className={classes} {...rest}>
      {heading ? (
        <h1 className="govuk-fieldset__heading">{children}</h1>
      ) : (
        children
      )}
    </legend>
  );
};

export default withGovukOverrides(Legend);
