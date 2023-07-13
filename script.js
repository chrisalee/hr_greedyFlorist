
// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
//     Sort the original prices of the flowers in descending order.
  let reverseSort = c.sort((a, b) => b - a);
// Initialize a variable 'total_cost' to 0 to keep track of the minimum cost.
  let totalCost = 0;
// Initialize a variable 'customer_index' to 0 to keep track of the index of the current customer.
  let customerIndex = 0;
// Iterate through the sorted prices in a loop.
  for(let i = 0; i < reverseSort.length; i++) {
// For each price, calculate the cost by multiplying it with '(customer_index // k) + 1', where 'k' is the size of the group of friends.
    let price = (Math.floor(customerIndex / k) + 1) * reverseSort[i];
// Add the calculated cost to the 'total_cost'.
    totalCost +=price;
// Increment the 'customer_index' by 1.
    customerIndex++;
  }
// Repeat steps 5-7 until all prices have been processed.
// Return the 'total_cost'.
  console.log(totalCost);
  return totalCost;
}
