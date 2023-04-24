/**
     * Header
         *  -Logo
         *  -Nav Items(Right Side)
         *  -Cart
     * Body
         *  -Search Bar
         *  -RestaurantList
         *      -RestaurantCard (many cards)
         *          - Image
         *          - Name
         *          - Rating
         *          - Cusines
     * Footer
         *  -Links
         *  -Copyright
*/

import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://img.freepik.com/premium-vector/food-house-logo-template-design-vector_20029-512.jpg?w=2000"
        />
    </a> 
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    );
};

//JSx have only one parent thats why enclose the components in React.Fragment or <></>(also known as React.Fragment) or div
//This is config driven ui

const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "82234",
          "name": "KFC",
          "uuid": "5b58ebaa-6ed3-49d2-9fb0-09b2e834beb3",
          "city": "50",
          "area": "Civil Lines",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "tags": [
            
          ],
          "costForTwo": 45000,
          "costForTwoString": "₹450 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 0.800000011920929,
          "slugs": {
            "restaurant": "kfc-mg-road-civil-lines",
            "city": "allahabad"
          },
          "cityState": "50",
          "address": "KFC Restaurant, P square mall, 229/71 & 71/37 MG Road, Civil Lines, Allahabad, Uttar Pradesh-211001",
          "locality": "Mahatma Gandgi Road",
          "parentId": 547,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6536730~p=1~eid=00000187-b1e4-c802-0f1c-6f3d00b10133",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "82234",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 0.800000011920929,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "253769",
          "name": "McDonald's",
          "uuid": "ea982dbd-511e-4de2-8b27-31dfde243ad7",
          "city": "50",
          "area": "Civil Lines",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
          "cuisines": [
            "American"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 0.6000000238418579,
          "slugs": {
            "restaurant": "mcdonalds-up-allahabad-atlantis-civil-lines",
            "city": "allahabad"
          },
          "cityState": "50",
          "address": "UP Allahabad Atlantis, UG- 4, 34-B, Atlantis Mall. Mahatma Gandhi Marg  Civil Lines. Allahabad (UP)- 211001",
          "locality": "Mahatma Gandhi Marg",
          "parentId": 630,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "253769",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 0.6000000238418579,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "127674",
          "name": "Khansama",
          "uuid": "06875eab-ff9a-42d6-bfb3-0881f5c6989d",
          "city": "50",
          "area": "Civil Lines",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "wj7ivgqg9gjrmvuqqurv",
          "cuisines": [
            "Biryani",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 0.6000000238418579,
          "slugs": {
            "restaurant": "khansama-civil-lines-civil-lines",
            "city": "allahabad"
          },
          "cityState": "50",
          "address": "213/63 M.G. Marg, Civil Lines, Allahabad",
          "locality": "Mahatma Gandhi Marg",
          "parentId": 14616,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "30% off",
            "shortDescriptionList": [
              {
                "meta": "30% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹75 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "30% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹75 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "127674",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 0.6000000238418579,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "80427",
          "name": "Jai Shree Shankar Bhojanalaya",
          "uuid": "1549300e-73c1-4a09-8b9d-6ec3934f54d0",
          "city": "50",
          "area": "Civil Lines",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "qhdec9rh38ewnb80tkim",
          "cuisines": [
            "North Indian",
            "Thalis",
            "South Indian",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 0.5,
          "slugs": {
            "restaurant": "new-jai-shankar-bhojanalaya-civil-lines-civil-lines",
            "city": "allahabad"
          },
          "cityState": "50",
          "address": "29/61, Mahatma Gandhi Marg, Opp Big Bazar, Civil Lines, Prayagraj",
          "locality": "Mahatma Gandhi Marg",
          "parentId": 108722,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 1700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 1700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "1700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6340328~p=4~eid=00000187-b1e4-c802-0f1c-6f3e00b1042d",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "80427",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.7",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
];

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, slaString, costForTwoString }) => {
    
    return (
        <div className="card">
            <img src= {
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
            }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>★{avgRating}</h4>
            <h4>{slaString}</h4>
            <h4>{costForTwoString}</h4>
            

        </div>
    );
};

//props => Properties (passing data into the components)
const Body = () => {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant) =>{
                    return <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
                })
            }    
        </div>
    );
};

const Footer = () => {
    return <h4>Footer</h4>
};

const AppLayout = () => {
    return (
         <React.Fragment>
            <Header />
            <Body />
            <Footer />
         </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);