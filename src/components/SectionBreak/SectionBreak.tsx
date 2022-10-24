import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import withGovukOverrides from '../../hoc/withGovukOverrides';

interface SectionBreakOwnProps {
  size?: 'm' | 'l' | 'xl';
  visible?: boolean;
}

export type SectionBreakProps = OverridableComponentProps<
  Omit<ComponentPropsWithoutRef<'hr'>, keyof SectionBreakOwnProps> &
    SectionBreakOwnProps
>;

const SectionBreak: FC<SectionBreakProps> = (props) => {
  const { size, visible, className, ...rest } = props;

  const classes = classNames(
    'govuk-section-break',
    {
      [`govuk-section-break--${size}`]: !!size,
      'govuk-section-break--visible': visible,
    },
    className,
  );

  return <hr className={classes} {...rest} />;
};

export default withGovukOverrides(SectionBreak);
