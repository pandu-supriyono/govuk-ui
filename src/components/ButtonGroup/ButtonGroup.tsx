import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type ButtonGroupProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'div'>
>;

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { className, children, ...rest } = props;

  const classes = classNames('govuk-button-group', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default withGovukOverrides(ButtonGroup);
