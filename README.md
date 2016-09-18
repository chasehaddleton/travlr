## Intro
Travlr is all about bringing people together. Bringing tailored experiences to everyone.
[travlr.club](http://travlr.club)


## Our tech
### Architecture
New to our team, we decided to explore the idea of microservices. Doing so allowed us to segment travlr into distinct, externally useful services. 
The first of which is our website back-end, this contains the business logic behind travlr. We also have microservices for intelligently finding nearby events and attractions, determining currency conversions based on gps location and for businesses to serve promotions to travlrs.


### APIs
- **Google cloud** - Used as the back-end for our website and for hosting all of our microservices.
- **Xe** - Used for our geolocation based currency conversion. (not in final version)
- **Google maps** - Used to display the locations of nearby events and attractions.
- **Google places** - Used for data gathering to intelligently serve events and attractions nearby.

### Languages / Frameworks
- **Node.js** - Used for everything serverside -- microservices and the site back-end.
- **JS** - Used for everything front-end -- talking to the site back-end and client-side logic.
- **SASS** - For making our UI beautiful.
- **Jade** - The templating engine used with our express back-end.


## The sponsors
- **Google** - We made extensive use of Google cloud and other Google APIs including maps and places.
 

## The roadmap
We expect to continue developing travlr after HTN. Having worked towards a minimum viable product for the last 36 hours, we have come to terms with the full breadth and scale possible with travlr. Many features didn't make it into the MVP so allow me to elaborate --


### Dreamer
During development, we decided to use the Disney creative strategy. Our 'dreamer' goals were as follows --
- Allow businesses to offer discounts to local groups of travlrs.
- Create a social network for travlrs, the use of 'travlr-codes' was thrown around during ideation.
- Use travlr codes for discounts at partner locations.
- Integrate travlr points, redeemable against travel related events etc.
- Use machine learning to learn the preferences and interests of a user, with the goal of intelligently generating events.
- Travlr meetups, if there is a cluster of travlrs, suggest meetups -- this ties into group discounts also.


### Realist
- Generate recommended events and locations 'intelligently', based on a user's interests and preferences.
- Have a frontend maps visualization of these locations.
- Segment development into a series of microservices.
- Implement basic business offers.


### Critic
- Generate events using keyword matching and multipliers such as willingness to travel.
- Maps visualization. 
- A few microservices to handle the various APIs used.


### Business model
The core business model of travlr is similar to, and much inspired by, Pokemon GO. Imagine the 'lure' system, businesses can offer up incentives such as group discounts -- maybe a free drink if a group of 10 or more travlrs visit, for example. This can be stretched in similar ways, consider the UBER surge pricing model -- but in reverse.


## Inspiration
Two of our three team members traveled from the UK, during our trip; and many before this, we have struggled to decide exactly what we want to do with our time when travelling. This is especially true for day trips to cities for example. This sparked our initial idea to apply machine learning to make an interest -> event matching system.


## What it does
Travlr, in its current dev state, suggests events based on a users interests, their location, their willingness to travel etc. It tracks the travlr to suggest events nearby, and features a cross platform UI meaning it can be used on any device. We have architected travlr to be scaleable, for the addition of the previously mentioned features at a later date. This is why we took the microservice approach.


## What it doesn't
The scope for travlr was large -- even for a month long project, let alone a 36hr hackathon. We went into the project well aware of this, but continued as the breadth of knowledge we gained in infrastructure, new languages and frameworks was incredibly valuable. Our release version did not quite hit our MVP plan but features fully capable microservices using Google cloud services.
