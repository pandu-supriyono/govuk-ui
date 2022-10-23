import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type FormGroupProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'div'> & {
    error?: boolean;
  }
>;

const FormGroup: FC<FormGroupProps> = (props) => {
  const { className, error, children, ...rest } = props;

  const classes = classNames(
    'govuk-form-group',
    {
      'govuk-form-group--error': error,
    },
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default withGovukOverrides(FormGroup);
