# cs411-2024-spring
#  Requirements

1.    Project Description
        -    Our project aims to develop a website that assists users in discovering recipes and
nutritional information for various dishes. Utilizing an API from a food-oriented website,
we plan to extract essential details about recipes and their nutritional content. For users
uncertain about their meal choices, our website will feature an integration with ChatGPT
through its API to engage in interactive conversations, helping to inspire their decisions.
Additionally, for users preferring to dine out, our site will incorporate Google Maps API to
display nearby restaurants offering the selected dishes. The collected information,
including user queries and preferences, will be stored in a MySQL database for future
reference and data analysis.

2.    Product Requirements
        -  Goal: To create a user-friendly website that provides recipes, nutritional facts, and dining
        options based on user preferences or interactive ChatGPT sessions.
        -  Non-Goal: Our project does not aim to develop new APIs for food data retrieval or map integration
          but rather to leverage existing ones effectively.
        -  Non-functional requirement 1:  Security
            -  Functional requirement:
                -  Use OAuth authentication to log into Google map
                -  Securely storeGoogleMap api keys in local files only without exposing them on github/the web
        -  Non-functional requirement 2: Repeatability
            -  Functional requirement:
                -  Previous searches and their results will be stored locally
                -  Priority will be given to restaurants that have eaten at before

3.    Project Management
        -  Theme:  Delight the user by showing them appropriate recipes or restaurants.
        -  Epic:   Interactive Conversations
        -  User story 1:  As a user, I want to ask specific dietary preference questions to the system for relevant
suggestions.
            -  Task:  Integrate ChatGPT API to support real-time conversations.
                -  Ticket 1:  Implement ChatGPT API integration to enable real-time interactions.
                -  Ticket 2:  Design a user-friendly frontend interface allowing users to interact with the system
        -  User story 2:  Find restaurants that have this food nearby by selecting a specific food variety.
            -  Task:  Access to the Google Maps API and localization of the user's location.
                -  Ticket 1:  By accessing Google Maps' API, it searches for restaurants where specific types of food are located
after obtaining the user's geolocation information.
                -  Ticket 2:  To display a sufficient number of restaurants as well as some useful information for the user
(distance, price per person, restaurant ratings)
