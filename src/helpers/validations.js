export const validations = {
  number: value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined,

  minValue: min => value =>
    value && value < min ? `Must be at least ${min}` : undefined,

  maxValue: max => value =>
    value && value > max ? `Cannot be more than ${max}` : undefined,
    
};