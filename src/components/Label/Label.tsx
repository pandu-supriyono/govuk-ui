import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type LabelProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'label'>
> & {
  size?: 's' | 'm' | 'l' | 'xl';
  heading?: boolean;
};

const Label: FC<LabelProps> = (props) => {
  const { children, className, size, heading, ...rest } = props;

  const classes = classNames(
    'govuk-label',
    {
      [`govuk-label--${size}`]: !!size,
    },
    className,
  );

  if (heading) {
    return (
      <h1 className="govuk-label-wrapper">
        <label className={classes} {...rest}>
          {children}
        </label>
      </h1>
    );
  }

  return (
    <label className={classes} {...rest}>
      {children}
    </label>
  );
};

export default withGovukOverrides(Label);
