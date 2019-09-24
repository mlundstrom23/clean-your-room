var voluntaryLife = {
  name: 'SunLife Voluntary Life',
  vendor: 'Sunlife US',
  type: 'volLife',
  employerContribution: { mode: 'percentage', contribution: 10 },
  cost: { costDivisor: 1000, price: 0.35 },
}

var longTermDisability = {
  name: 'Guardian LTD',
  vendor: 'Guardian Insurance',
  type: 'ltd',
  employerContribution: { mode: 'dollar', contribution: 10 },
  coveragePercentage: 150,
  cost: { costDivisor: 5000, price: 0.89 }
}

module.exports = {
  voluntaryLife,
  longTermDisability,
}
