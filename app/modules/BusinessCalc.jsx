
exports.calculateFirmValue = function(initialInvestment, requiredReturn) {
    return initialInvestment / (requiredReturn / 100);
}

exports.calculateSalesAtEndOfInvPeriod = function(firmValue, salesMargin) {
	return firmValue / (salesMargin / 100);
}

exports.calculateRequiredAnnualGrowth = function(salesAtEndOfInvPeriod, entrySales, investmentPeriod, yearsUntilSales) {
	return Math.pow((salesAtEndOfInvPeriod / entrySales), (1 / (investmentPeriod - yearsUntilSales))) - 1
}