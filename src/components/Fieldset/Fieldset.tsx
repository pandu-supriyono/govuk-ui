import classNames from 'classnames';
import { ComponentPropsWithoutRef, FC, ReactElement } from 'react';
import withGovukOverrides from '../../hoc/withGovukOverrides';
import { OverridableComponentProps } from '../../types/GovukOverrides';
import Legend from './Legend';

export type FieldsetProps = OverridableComponentProps<
  ComponentPropsWithoutRef<'fieldset'>
> & {
  legend?: string | ReactElement;
};

const Fieldset: FC<FieldsetProps> = (props) => {
  const { className, children, legend, ...rest } = props;
  const classes = classNames('govuk-fieldset', className);

  function LegendComponent() {
    if (typeof legend === 'string') {
      return <Legend>{legend}</Legend>;
    }
    if (typeof legend === 'object') {
      return legend;
    }
    return null;
  }

  return (
    <fieldset className={classes} {...rest}>
      <LegendComponent />
      {children}
    </fieldset>
  );
};

export default withGovukOverrides(Fieldset);
