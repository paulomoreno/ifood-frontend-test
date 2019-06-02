const validations = {
  number: value => (value && Number.isNaN(Number(value)) ? 'Deve ser um número' : undefined),

  minValue: min => value => (value && value < min ? `Deve ser pelo menos ${min}` : undefined),

  maxValue: max => value => (value && value > max ? `Não pode ser maior que ${max}` : undefined),
};

export default validations;
