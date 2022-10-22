import { ComponentPropsWithoutRef, ComponentType } from 'react';
import { GovukWidth } from './Width';

export type GovukSpacingOverride = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface GovukSpacingOverridesProps {
  m?: GovukSpacingOverride;
  ml?: GovukSpacingOverride;
  mt?: GovukSpacingOverride;
  mb?: GovukSpacingOverride;
  mr?: GovukSpacingOverride;
  p?: GovukSpacingOverride;
  pl?: GovukSpacingOverride;
  pt?: GovukSpacingOverride;
  pb?: GovukSpacingOverride;
  pr?: GovukSpacingOverride;
}

export type GovukDisplayOverride =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'none'
  | 'none-print';

export interface GovukDisplayOverridesProps {
  display?: GovukDisplayOverride;
}

export interface GovukWidthOverridesProps {
  width?: GovukWidth;
}

export type GovukOverridesProps = GovukWidthOverridesProps &
  GovukDisplayOverridesProps &
  GovukSpacingOverridesProps;

export type ComponentPropsWithGovukOverrides<T extends ComponentType<'any'>> =
  ComponentPropsWithoutRef<T> & GovukOverridesProps;

export type OverridableComponentProps<P> = P & {
  className?: string;
  overrides?: GovukOverridesProps;
};
