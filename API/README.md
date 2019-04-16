----- CARS -----
1 - add a new car  
  POST to "/car"

2 - return all cars
  GET to "/car"

3 - update a car
  PUT to "/car/:carId"

4 - delete a car
  DELETE to "/car/:carId"

5 - find a car
  GET to "/car/:carId"

----- RENTALS -----
1 - add a rental
  POST to "/rental"

2 - return all rentals
  GET to "/rental"

3 - find a rental
  GET to "/rental/:rentalId"

4 - update a rental
  PUT to "/rental/:rentalId"

5 - delete a rental
  DELETE to "/rental/:rentalId"

----- USERS -----
1 - add a user
  POST to "/user"

2 - return all users
  GET to "/user"

3 - update a user
  PUT to "/user/:userId"

4 - find a user
  GET to "/user/:userId"

5 - delete a user
  DELETE to "/user/:userId"

6 - reuturn a user's rental history
  GET to "/user/rental/:userId"