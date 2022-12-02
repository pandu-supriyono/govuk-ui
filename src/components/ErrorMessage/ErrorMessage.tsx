import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';

export type ErrorMessageProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'p'> & {
    screenReaderAnnouncement?: string;
  }
>;

const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  const {
    className,
    children,
    screenReaderAnnouncement = 'Error',
    ...rest
  } = props;

  const classes = classNames('govuk-error-message', className);

  return (
    <p className={classes} {...rest}>
      <span className="govuk-visually-hidden">{`${screenReaderAnnouncement}:`}</span>
      {children}
    </p>
  );
};

export default withGovukOverrides(ErrorMessage);
