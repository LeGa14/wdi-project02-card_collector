# wdi-project02-card_collector

As a user view the Card Collector App
I want to look at a homepage
    
    As a user who does not have an account
    I want to create an account
        
        As a user creating an account
        I want to access a form to create an account
            
            As a user who filled out a form to create an account
            I want to submit that account information
                
                As a user who submitted a form to create an account
                I want to be brought back to the homepage

    I want to view all cards available for database storage
        
        As a user that just wants to view all cards
        I want to click a link that takes me to a page displaying all cards

            As a user that is viewing all cards...

            

    As a user who has an account
    I want to access my account info
        
        As a user who is trying to access my account info
        I want to click a link that will take me to a page displaying my account info
            
            As a user who is viewing my account info
            I want edit/update my acocunt info
            
            I want to delete my account
               
                As a user trying to delete my account
                I want to click a button that will allow me to delete my account

                    As a user who clicked a "delete account" button
                    I want to be presented with a affirmation alert

                        As a user who wants to delete my account
                        I want to click "Yes I'm sure"

                            As a user who is sure about deleting their account
                            I want to complete a confirmation procedure

                        As a user who doesn't want to delete my account
                        I want to click "I'm not ready"

                            As a user who has chosen not to delete my account
                            I want to be prompted to choose where to go after my decision

                                As a user who choosing where to go after chosing not to delete
                                I want to be present with options

                                    As a user presented with redirect options
                                    I want to see "homepage" and "Account info"

                                        As a user who selected "Homepage"
                                        I want to be directed back to the homepage

                                            As a user who has been redirected back to the homepage
                                            I want to see an alert saying "Cool, back to the beginning"
                                        
                                        As a user who selected "Account Page"
                                        I want to be directed back to my account info page

                                            As a user who has been redirected back to the account page
                                            I want to see an alert saying "Whew, at least you're sticking around a little bit longer"


                                I want to be returned to the homepage automatically
                                    
                                    As a user returned to the homepage automatically
                                    I want to see an alert that tells me "We sent you here to protect your accounts environmental privacy."

    
    I want to view my card collection
        
        As a user trying to view my card collection
        I want to click a link that will take me to my entire collection
            
            As a user viewing my card collection
            I want to view a specific card
                
                As a user trying to view a specific card
                I want to be able to click a card and be taken to a page showing info about that specific card
                    
                    As a user viewing a specifi card
                    I want to edit information about that specific card
                        
                        As a user trying to edit info bout a specific card
                        I want to click a button to take me to a "edit card" page
                            
                            As a user viewing an "edit card" page
                            I want to fill out a form where I can change user-specific detail about a card
                                
                                As a user who filled out a form
                                I want to be able to submit the form
                                    
                                    As a user who has submitted an "edit card" form
                                    I want to be redirected to the collection of cards to see the change

                            I want to be able to go back to the previous page
                                
                                As a user who has changed their mind about editing a card
                                I want to click a button that will redirect me to previous page

                    I want to be able to go back to the previous page
                        As a user who no longer want to view a specific card
                        I want to click a button that will redirect me to previous page
            
            I want to add a new card into my collection

                As a user who wants to add a new card into my collection
                I want to click a button to take me to a page with an "add a card"form 

                    As a user who is filling out a form to add a card
                    I want to chose a card based on available info i can provide to identify the card I want to add

                        As a user who has chosen a card to add to my collection
                        I want to submit the form to log the card into my collection

                            As a user who has submitted a card to add to my collection
                            I want to be redirected to my collection so that I can view it as an addition

            I want to remove a card from my collection

                As a user trying to remove a card from my collection
                I want to click a button that will allow me to delete it from my collection

                    As a user who clicked a "delete card" button
                    I want to be presented with a affirmation alert

                        As a user who wants to delete a card
                        I want confirm a card deletion

                        As a user who doesn't want to delete a card
                        i want to denie a card deletion

    I want to view the card collection of other account-holders
        
        As a user trying the view the card collections of others
        I want to view all other users that aren't me
            
            As a user viewing other users
            I want to click a specific user to view info 

                As a user who has is viewing another basic user's info
                I want to view all of their cards

                    As a user trying to view another user's cards
                    I want to compare their card collection to mine

                        As a user comparing collections
                        I want to click a button that will  display different indicator based on collection comparisons
                        
                        I want to mark cards from their collection that interest me
                            
                            As a user trying to mark "desirable" cards
                            I want to hover over a card and be presented with an option to "mark" a card

                    I want to view a specific card
                        
                        As a user trying to view a specific card
                        I want to be able to click a card and be taken to a page showing info about that specific card
                            
                            As a user viewing a specifi card from another user's collection
                            I want to see that user's specific details relating to that card

                                As a user searching for user-specific card details (metadata)
                                I want to click a button that display the cards metadata

                                    As a user viewing a card's metadata
                                    I want to be able to hide the metadata
                                    
                                    I want to compare my metadata with theirs

                                        As a user comparing card metadata
                                        I want to hover over details and comparisons appear

                I want to view their more intricate details about their acocunt
                    
                    As a user trying to research a another user
                    I want to click a link that will display that user's account info
                        
                        As a user viewing another users account info
                        I want to click a link to redirect to me to the previous page

                
                I want to view their cards by certain criteria
                    
                    As a user trying view cards based on criteria
                    I want to be search for specific cards
                    I want to filter all visible cards
                        
                        As a user filtering cards
                        I want to  look through specifc card details

                            As a user looking through card details 
                            I want to choose specific filter criteria  based on card attributes
                            I want to choose multiple filters that will work together
            
            I want to search for a specific user

                As a user searching for specific user
                I want to type keywords into a text area
                     
                     As a user with a keyword to search for
                     I want to submit the search

                        As a user who has submitted a search
                        I want to view the results of the search

***use a prezi to show user journeys
***this is for testing heroku auto deploy github connection

Where I left off: Thursday
I was working on my "index GET User" route
I had just added "module.exports = router" to allow the controller to connect to other files.
So far, evrything works except an error:
    ERROR Error: Invalid schema, expected `mongodb` or `mongodb+srv`
When I return, 
    I will comment out the mongoose connections and 
    change to a local connection
    "mongoose.connection" found in seed file
    From there, 
    I will test its functionality locally
    switch it back if it works

Where I left off : Thursday night
I had figured out running `heroku local` from the terminal
I got the client to properly render my first user get route
however
the page is empty so
I need to figure how to connect the database when running tests locally
so that my seeded data appears
My mongoose databases are linked to the local server and
I want to be able to tests my routes without changing them to that.
I can begin to start on other routes for the user controllers

Again:
I figured out 
how to locally connect the 
mongodb to heroku without a problem.
I now need to properly get 
the info from the database
onto the page
and display properly. I have atab open with a near-solution
but I also need a way to confirm information
in the mongodb is actually being rendered.
I can run tests using variations to the seed file, but
I still need a way to confirm their changes without mongodb compass.