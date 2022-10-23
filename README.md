# GOV.UK UI

GOV.UK UI is a React component library which ports components from the [GOV.UK
Design System](https://design-system.service.gov.uk/). 

## Motivation

GOV.UK UI aims to provide a framework-like React experience similar to MUI or
Chakra UI, abstracting away all [GOV.UK
Frontend](https://github.com/alphagov/govuk-frontend) classes whilst exposing
components at a low level (akin to just using HTML) so that you can compose
them to suit your needs. At the same time, GOV.UK UI provides an idiomatic
React and TypeScript developer experience, which means it may steer away from
the Nunjucks macros originally provided with GOV.UK Frontend. For example:

```tsx
import { FormGroup, Input, label } from "govuk-ui";

const TextInput = () => {
  return (
    <FormGroup>
      <Label htmlFor="name">What is your name?</Label>
      <Input id="name" name="name" />
    </FormGroup>
  );
}

```

Finally, this library is ignorant to the usage of React Router or any other
routing provider (i.e. Next Router). It also allows you to choose how CSS is
imported into your project. This makes consumption of this library flexible to
whatever React framework or implementation you may use.

## Installation and usage

TODO

## Contributors

[Pandu Supriyono](https://github.com/pandu-supriyono)

## Disclaimer

This project is in no away affiliated with GOV.UK or the UK Government as a whole.
