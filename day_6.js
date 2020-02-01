
// Given the following data, implement a function calculateSalesTax that 
// calculates the total sales and total tax, grouped by company ->

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// IMPLEMENT FUNCTION BELOW...

const calculateSalesTax = function(salesData, taxRates) {
  let result = {}

  salesData.map( (x) => {
    let sumTotal = x.sales.reduce((a,c) => a+c)

    if (result[x.name]) {
      // IF COMPANY ALREADY IN "DATABASE" (add to rather than replace...)
      result[x.name].totalSales += sumTotal
      result[x.name].totalTaxes += taxRates[x.province] * sumTotal

    } else {
      // ELSE CREATE THE COMPANY IN "DATABASE" (&& fill in their respective fields...)
      result[x.name] = { 
        totalSales: sumTotal,
        totalTaxes: taxRates[x.province] * sumTotal
      }
    }

  })

  return result;
}

console.log("RESULT ✅ |>", calculateSalesTax(companySalesData, salesTaxRates))