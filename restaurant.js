function randomRestaurant(numOfRestaurants) {
    const restaurants = [ "Applebees", "Panera Bread", "Popeyes", "Chopt", "Chick-fil-A", "Cheesecake Factory", "Five Guys"];
    const randomRestaurantList = [];

    for (let i = 0; i < numOfRestaurants; i++) {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        randomRestaurantList.push(restaurants[randomIndex]);
    }

    return randomRestaurantList;
}

console.log(randomRestaurant(3));