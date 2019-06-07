/*

The problem:

Let's assume that there is an endpoint which returns all our serials, information about whether they're launched, how recently they've launched, and what their overall rating is. It also returns which ones the user already owns, as well as any that they've 'skipped' 

Recommendation strategy for ratings:

List of all released serials minus the ones they either have owned, or skipped, in desceding rating order.

You can call it multiple times in a row without have to recalculate.

*/

const response = {
  serials: [
    { 
      name: "Bookburners",
      launched: true,
      rating: 4.1,
      days_since_launch: 4
    },
    { 
      name: "Tremontaine",
      launched: true,
      rating: 4.3,
      days_since_launch: 10
    },
    { 
      name: "Black Widow",
      launched: false,
      rating: null,
      days_since_launch: null
    },
    { 
      name: "Black Panther",
      launched: false,
      rating: null,
      days_since_launch: null
    },
    { 
      name: "The Vela",
      launched: true,
      rating: 4.6,
      days_since_launch: 40
    },
    { 
      name: "Jessica Jones",
      launched: false,
      rating: null,
      days_since_launch: null
    },
    {
      name: "Ninth Step Station",
      launched: true,
      rating: 4.9,
      days_since_launch: 1
    }
  ],
  skips: [],
  serials_owned: ["Tremontaine"]
 // ]
}
 
// average page view per day for the last 30
// average rating
// whether the user has wish-listed it

// wish-list: straight to the top
// for things not in the wishlist:
//   average rating
//   average page 

const recommendationEngine = makeRecommendationEngine(response);
console.log(recommendationEngine.getRecommendations('ratingsWithPreorders'));  // ["Ninth Step Station", "The Vela", "Bookburners"]

// items.sort(function(a, b) { });

//first step, define
function makeRecommendationEngine(res){
  const strategyMemo = {
    
  }
  
  const getByRatings = function(filteredSerials){
    //save in an array []
    const results = [];

    filteredSerials.sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
    })
    

    
    for (let serial of filteredSerials){
        let name = serial.name; 
        results.push(name);
    }
    
    return results;
    
  }
   
  // TODO: is this the right name?
  const filterToLaunchedAndUnseenSerials = function() {
      const serials = res.serials;
      const launchedSerials = serials.filter((serial) => {
            return serial.launched;
        }) 
        
        const serialsOwned = res.serials_owned;
        const skips = res.skips;
        
        const unownedSerials = launchedSerials.filter((serial) => {
          return !serialsOwned.includes(serial.name);
        })
        
        console.log(unownedSerials)
        
        const unskippedSerials = unownedSerials.filter((serial) => {
            return !skips.includes(serial.name);
        })
        
        console.log(unskippedSerials)
        
        return unskippedSerials;
  }
    
  
  return {
    getRecommendations: function(strategy) {
    // check if strategy is memod, if so return momo
    if (strategyMemo[strategy]) return strategyMemo[strategy];
    // switch strategy 
    switch(strategy){
      case "ratings":
        const launchedSerials = filterToLaunchedAndUnseenSerials();
      
        const serialsInRateOrder = getByRatings(launchedSerials)
        strategyMemo[strategy] = serialsInRateOrder;
        return serialsInRateOrder;
      
      case "ratingsWithPreorders":
        getByRatingsWithPreorders(res)
      }
      
    }
  }

}
