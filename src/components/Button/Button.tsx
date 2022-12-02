import classNames from 'classnames';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
} from 'react';
import { OverridableComponentProps } from '../../types/GovukOverrides';

const buttonDefaultAsType = 'button' as const;

type ButtonDefaultAsType = typeof buttonDefaultAsType;

interface ButtonOwnProps<T extends ElementType> {
  as?: T;
  colour?: 'secondary' | 'warning';
  large?: boolean;
  start?: boolean;
  disabled?: boolean;
}

export type ButtonProps<T extends ElementType> = OverridableComponentProps<
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>> & ButtonOwnProps<T>
>;

const Button = forwardRef(
  <T extends ElementType = ButtonDefaultAsType>(
    props: ButtonProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    const {
      as = buttonDefaultAsType,
      colour,
      large,
      start,
      disabled,
      className,
      children,
      ...rest
    } = props;

    const Component = as;

    const classes = classNames(
      'govuk-button',
      {
        'govuk-button--large': large,
        'govuk-button--start': start,
        'govuk-button--disabled': disabled,
        [`govuk-button--${colour}`]: colour,
      },
      className,
    );

    return (
      <Component
        className={classes}
        ref={ref}
        aria-disabled={disabled}
        disabled={disabled}
        {...rest}
      >
        {children}
        {start && <StartIcon />}
      </Component>
    );
  },
);

const StartIcon = () => {
  return (
    <svg
      className="govuk-button__start-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  );
};

Button.displayName = 'Button';

export default Button;
