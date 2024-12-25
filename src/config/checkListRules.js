export default[
    {
        name: 'Valuation Fee Paid',
        field: 'isValuationFeePaid',
        condition: (value) => value === true,
    },
    {
        name: 'UK Resident',
        field: 'isUkResident',
        condition: (value) => value === true,
    },
    {
        name: 'Risk Rating Medium',
        field: 'riskRating',
        condition: (value) => value === 'Medium',
    },
    {
        name: 'LTV Below 60%',
        custom: true,
        condition: (data) => (data.loanRequired / data.purchasePrice) * 100 < 60,
    },
]