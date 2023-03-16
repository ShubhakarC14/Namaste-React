import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <a href="/">
    <img className="logo" src="https://10619-2.s.cdn12.com/rests/original/340_328462255.jpg" alt="logo" />
    </a>
);
// const heading1 = React.createElement("h1", {
//     id: "title",
//     key:"h1"
// }, "Heading one from parcel");
// console.log("hrading",heading1);
// const heading2 = React.createElement("h2", {
//     id: "title",
//     key:"h2"
// }, "Heading two");

// const container = React.createElement("div", {
//     id: "container",
//     hello:"world"
// }, [heading1, heading2]); // pass children

// // console.log(heading);
// const heading = <h1 id="title" key="h2" className="container">Namaste React !!!</h1>
    //   {/*
    //         header
    //             logo 
    //             list items
    //             cart
    //         body
    //          searchbar
    //          restaurant list
    //          restaurant card
    //             image
    //             name
    //             rating 
    //             cusines
    //         footer
    //             links
    //             copyrights
    //     */}
const Header = () => (
    
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
//config driven UI
const config=[
    {
        type:"carousel",
        cards:[
            {
                offerName:"50%v off"
            },
            {
                offerName:"No Delivery Charge"
            }
        ]
    },
    {
        type:"restaurants",
        cards:[
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "396129",
                "name": "Leon's - Burgers & Wings (Leon Grill)",
                "uuid": "8a461cda-2e24-493c-a63d-4ba5c45ad7d7",
                "city": "40",
                "area": "Jayalakhsmipuram",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "idul3mypguahz7zvggh3",
                "cuisines": [
                  "American",
                  "Snacks",
                  "Turkish",
                  "Portuguese",
                  "Continental"
                ],
                "tags": [
                  
                ],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "slaString": "19 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                  "restaurant": "leon-grill-mysore-north-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "No.768, Kalidasa Road, Vijayanagara 1st stage, Mysore, Mysore City, Karnataka.",
                "locality": "E Block",
                "parentId": 371281,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "50% off",
                  "shortDescriptionList": [
                    {
                      "meta": "50% off | Use SPECIALS",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "50% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use SPECIALS",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "adTrackingID": "cid=6188927~p=4~eid=00000186-e507-7e13-0516-9e5600ec0409",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "396129",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "lastMileTravel": 1.399999976158142,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.2",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "69906",
                "name": "Hotel Empire",
                "uuid": "b249f2c0-20c1-47d7-a79a-63e4920992c5",
                "city": "40",
                "area": "VV Mohalla",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "seyiujth3uwiyvlokae1",
                "cuisines": [
                  "North Indian",
                  "Kebabs",
                  "Biryani"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 18,
                "minDeliveryTime": 18,
                "maxDeliveryTime": 18,
                "slaString": "18 MINS",
                "lastMileTravel": 0.4000000059604645,
                "slugs": {
                  "restaurant": "empire-restaurant-gokulam-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "2820,1,8th cross road , vani vilas mohalla ,mysore - 570002",
                "locality": "Adipampa Road",
                "parentId": 475,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "69906",
                  "deliveryTime": 18,
                  "minDeliveryTime": 18,
                  "maxDeliveryTime": 18,
                  "lastMileTravel": 0.4000000059604645,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "339458",
                "name": "Onesta",
                "uuid": "4de47d6d-b029-4716-abe3-fe92086256e5",
                "city": "40",
                "area": "Gokulam",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "q9lidmwik26okvsg9pnj",
                "cuisines": [
                  "Italian",
                  "Desserts",
                  "Pizzas",
                  "American",
                  "Snacks"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 18,
                "minDeliveryTime": 18,
                "maxDeliveryTime": 18,
                "slaString": "18 MINS",
                "lastMileTravel": 0.20000000298023224,
                "slugs": {
                  "restaurant": "onesta1-shivas-plaza-and-star-point-6th-main-gokulam-road-vv-mohalla-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "2927, Shivas Plaza and Star Point, Gokulam Main Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
                "locality": "Gokulam Main Road",
                "parentId": 11785,
                "unserviceable": false,
                "veg": false,
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
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.2 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "339458",
                  "deliveryTime": 18,
                  "minDeliveryTime": 18,
                  "maxDeliveryTime": 18,
                  "lastMileTravel": 0.20000000298023224,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "70384",
                "name": "Pizza Hut",
                "uuid": "4f96695c-cc5d-4468-bc3b-f681f1002014",
                "city": "40",
                "area": "Mandi Mohalla",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "d1byzffj4ytgep09nue3",
                "cuisines": [
                  "Pizzas"
                ],
                "tags": [
                  
                ],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "slaString": "21 MINS",
                "lastMileTravel": 0.8999999761581421,
                "slugs": {
                  "restaurant": "pizza-hut-temple-road-opp-loyal-world-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "# 1/2,6th Main, V V Mohalla, Temple Road, Opp Loyal World, Mysore 570002",
                "locality": "Kalidasa Road",
                "parentId": 721,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.8 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "70384",
                  "deliveryTime": 21,
                  "minDeliveryTime": 21,
                  "maxDeliveryTime": 21,
                  "lastMileTravel": 0.8999999761581421,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "508798",
                "name": "The Kathi Roll Factory",
                "uuid": "4ad7ea23-6b47-4213-b35a-9dc6a45677a2",
                "city": "40",
                "area": "Jayalakhsmipuram",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "u3vumexxsyiw8vwe5j8c",
                "cuisines": [
                  "Chinese"
                ],
                "tags": [
                  
                ],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 0.6000000238418579,
                "slugs": {
                  "restaurant": "the-kathi-roll-factory-mysore-north-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "#2790/2, adipampa road, vv mohalla, mysore, 570002",
                "locality": "Adipampa Road",
                "parentId": 210390,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                  "restaurantId": "508798",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
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
                "totalRatings": 500,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "69629",
                "name": "Domino's Pizza",
                "uuid": "df3ad9f8-60c2-4376-96a5-50e3f3951a03",
                "city": "40",
                "area": "Jayalakhsmipuram",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "keyb5it6xvccyw0dj5bt",
                "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Pastas",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 70000,
                "costForTwoString": "₹700 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 0,
                "slugs": {
                  "restaurant": "dominos-pizza-temple-road-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "2951/1, Temple Road, Next To Loyal World, V.V. Mohalla,Mysore Karnataka 570002",
                "locality": "Gokulam Main Road",
                "parentId": 2456,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "adTrackingID": "cid=6172782~p=7~eid=00000186-e507-7e13-0516-9e5700ec0753",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "hasSurge": false,
                "sla": {
                  "restaurantId": "69629",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 0,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.5",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "448740",
                "name": "Hill Special Momos",
                "uuid": "7b195f53-d052-4d29-ac9b-79d86d41fe2d",
                "city": "40",
                "area": "Vijay Nagar",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "vdppbdlppwmvgnf3fydv",
                "cuisines": [
                  "Chinese"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "slaString": "19 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                  "restaurant": "hill-special-momo’s-mysore-north-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "No.767, New kalidasa road, Vijayanagar1st stage, Mysore, 570012",
                "locality": "Kalidasa Road",
                "parentId": 270148,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "448740",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "lastMileTravel": 1.399999976158142,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "598001",
                "name": "Chinese Wok",
                "uuid": "9bbd596e-4808-40e8-9bfa-b106268672e0",
                "city": "40",
                "area": "Mysore North",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "i9s8pgbnuaau4n2hrf5c",
                "cuisines": [
                  "Chinese",
                  "Asian",
                  "Tibetan",
                  "Desserts"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 14,
                "minDeliveryTime": 14,
                "maxDeliveryTime": 14,
                "slaString": "14 MINS",
                "lastMileTravel": 0.30000001192092896,
                "slugs": {
                  "restaurant": "chinese-wok---wok-express-mysore-north-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "NO.2831, D-20 ( MAIN HOUSE ), NO.2831/1, D-17/2 ( OUT HOUSE ), GROUND FLOOR, 10TH CROSS, ADIPAMPA ROAD, VANIVILASAPURAM, DEVARAJA MOHALLA, V V MOHALLA, MYSORE, Mysore, Mysore, Karnataka-570002",
                "locality": "Adipampa Road",
                "parentId": 61955,
                "unserviceable": false,
                "veg": false,
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
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "598001",
                  "deliveryTime": 14,
                  "minDeliveryTime": 14,
                  "maxDeliveryTime": 14,
                  "lastMileTravel": 0.30000001192092896,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.7",
                "totalRatings": 500,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "90781",
                "name": "Kolhapuri Bhel- Kuvempunagar",
                "uuid": "976e1dbf-1a5b-450e-ad3b-973f4edc0b15",
                "city": "40",
                "area": "Kuvempunagar",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "ffpp3fiqq3odb0omrcdr",
                "cuisines": [
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 5,
                "slugs": {
                  "restaurant": "kolhapuri-bhel-kuvempunagar-mysore-south",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "511, Panchamantra Rd, E&F Block, Kuvempu Nagara, Mysuru, Karnataka 570023, India",
                "locality": "Panchamantra road",
                "parentId": 119795,
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
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 3400,
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
                  "totalFees": 3400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3400",
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
                "adTrackingID": "cid=6160989~p=10~eid=00000186-e507-7e13-0516-9e5800ec0a21",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "90781",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.8",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "448127",
                "name": "Easy Bites by Hotel Empire",
                "uuid": "90244b1c-51a8-4336-bfce-99d50a8ca743",
                "city": "40",
                "area": "Gokulam",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
                "cuisines": [
                  "Snacks",
                  "American"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "slaString": "23 MINS",
                "lastMileTravel": 0.4000000059604645,
                "slugs": {
                  "restaurant": "easy-bites-mysore-north-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "#2820/1, 8th Cross, Kalidasa Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
                "locality": "Kalidasa Road",
                "parentId": 8503,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "60% off",
                  "shortDescriptionList": [
                    {
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "448127",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "lastMileTravel": 0.4000000059604645,
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
                "id": "68262",
                "name": "Rasooi Magic",
                "uuid": "9bd57283-e3f3-4ba9-aaa2-4f9b41865eae",
                "city": "40",
                "area": "Jayalakhsmipuram",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "ps9dig9gjeav77sksheb",
                "cuisines": [
                  "Desserts",
                  "Chinese",
                  "North Indian",
                  "Ice Cream",
                  "Biryani"
                ],
                "tags": [
                  
                ],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "slaString": "21 MINS",
                "lastMileTravel": 0.4000000059604645,
                "slugs": {
                  "restaurant": "rasooi-magic-jayalakhsmipuram-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "16, Kalidasa Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
                "locality": "Kalidasa Road",
                "parentId": 20998,
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
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "68262",
                  "deliveryTime": 21,
                  "minDeliveryTime": 21,
                  "maxDeliveryTime": 21,
                  "lastMileTravel": 0.4000000059604645,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "217183",
                "name": "Kailash Parbat - Fine Dine Restaurant",
                "uuid": "c092fe11-1dd7-43e6-a96f-719c8ba82526",
                "city": "40",
                "area": "Jayalakhsmipuram",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "xpbjrw6xsotlon4gxwcr",
                "cuisines": [
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "slaString": "20 MINS",
                "lastMileTravel": 0.4000000059604645,
                "slugs": {
                  "restaurant": "kailash-parbath-mysore-south-mysore-south",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "#2917, D-6, 8th Cross,6th Main, V V Mohalla,Mysore-570002 Karnataka",
                "locality": "Adipampa Road",
                "parentId": 393644,
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
                      "meta": "60% off | Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "meta": "Use WELCOMEBACK",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "adTrackingID": "cid=6110755~p=13~eid=00000186-e507-7e13-0516-9e5900ec0d34",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "0.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "217183",
                  "deliveryTime": 20,
                  "minDeliveryTime": 20,
                  "maxDeliveryTime": 20,
                  "lastMileTravel": 0.4000000059604645,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
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
                "id": "396422",
                "name": "EatFit - All Things Healthy",
                "uuid": "2402a8dd-2342-4761-906f-7a0733631129",
                "city": "40",
                "area": "Jayalakhsmipuram",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
                "cuisines": [
                  "Healthy Food",
                  "Pizzas",
                  "North Indian",
                  "Thalis",
                  "Biryani",
                  "Chinese"
                ],
                "tags": [
                  
                ],
                "costForTwo": 27000,
                "costForTwoString": "₹270 FOR TWO",
                "deliveryTime": 14,
                "minDeliveryTime": 14,
                "maxDeliveryTime": 14,
                "slaString": "14 MINS",
                "lastMileTravel": 0.30000001192092896,
                "slugs": {
                  "restaurant": "eatfit-vv-mohalla-road-panchavati-plaza-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "Panchavati plaza, No 86 D3/A, Kalidasa Road, VV Mohalla Road, Mysore 570012",
                "locality": "Kalidasa Road",
                "parentId": 76139,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "FLAT125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹125 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "396422",
                  "deliveryTime": 14,
                  "minDeliveryTime": 14,
                  "maxDeliveryTime": 14,
                  "lastMileTravel": 0.30000001192092896,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.3",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "683068",
                "name": "Starbucks Coffee",
                "uuid": "1e7df49b-a00e-4d4e-8b4c-81f68d0b4405",
                "city": "40",
                "area": "VV Mohalla",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "e902c6a9f81d35d2a347f2e6666a6462",
                "cuisines": [
                  "Beverages",
                  "Cafe",
                  "Snacks",
                  "Desserts",
                  "Bakery",
                  "Ice Cream"
                ],
                "tags": [
                  
                ],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "slaString": "21 MINS",
                "lastMileTravel": 0.20000000298023224,
                "slugs": {
                  "restaurant": "starbucks-coffee-gokulam-main-rd-mysore-north",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "Tata Starbucks, Ground Floor , 2927, C/O Star Wing Building, Gokulam Main Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
                "locality": "Gokulam Main Rd",
                "parentId": 195515,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "40% off",
                  "shortDescriptionList": [
                    {
                      "meta": "40% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹80 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "40% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹80 | Use code TRYNEW",
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "lastMileTravelString": "0.2 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "683068",
                  "deliveryTime": 21,
                  "minDeliveryTime": 21,
                  "maxDeliveryTime": 21,
                  "lastMileTravel": 0.20000000298023224,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.5",
                "totalRatings": 20,
                "new": true
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "197641",
                "name": "Oven Story Pizza",
                "uuid": "16b3ef64-536e-46c1-afa3-d5b2d28c767a",
                "city": "40",
                "area": "Vijayanagar",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
                "cuisines": [
                  "Pizzas"
                ],
                "tags": [
                  
                ],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 1.399999976158142,
                "slugs": {
                  "restaurant": "ovenstory-pizza-kalidasa-road-hebbal_myq",
                  "city": "mysore"
                },
                "cityState": "40",
                "address": "774,1 st floor, Opp Niligiris,1 st stage, Devaraja mohalla, Kalidasa road, Vijayanagar Mysore 570017",
                "locality": "Kalidasa road",
                "parentId": 3534,
                "unserviceable": false,
                "veg": false,
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
                      "fee": 1900,
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
                  "totalFees": 1900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "1900",
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
                "adTrackingID": "cid=6184912~p=16~eid=00000186-e507-7e13-0516-9e5a00ec1039",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "1.3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "197641",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 1.399999976158142,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.1",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            }
          ]
    }
]
const restaurantList =  [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "396129",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "8a461cda-2e24-493c-a63d-4ba5c45ad7d7",
        "city": "40",
        "area": "Jayalakhsmipuram",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "idul3mypguahz7zvggh3",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "leon-grill-mysore-north-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "No.768, Kalidasa Road, Vijayanagara 1st stage, Mysore, Mysore City, Karnataka.",
        "locality": "E Block",
        "parentId": 371281,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "adTrackingID": "cid=6188927~p=4~eid=00000186-e507-7e13-0516-9e5600ec0409",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "396129",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "69906",
        "name": "Hotel Empire",
        "uuid": "b249f2c0-20c1-47d7-a79a-63e4920992c5",
        "city": "40",
        "area": "VV Mohalla",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "seyiujth3uwiyvlokae1",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "empire-restaurant-gokulam-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "2820,1,8th cross road , vani vilas mohalla ,mysore - 570002",
        "locality": "Adipampa Road",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "69906",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "339458",
        "name": "Onesta",
        "uuid": "4de47d6d-b029-4716-abe3-fe92086256e5",
        "city": "40",
        "area": "Gokulam",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "q9lidmwik26okvsg9pnj",
        "cuisines": [
          "Italian",
          "Desserts",
          "Pizzas",
          "American",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.20000000298023224,
        "slugs": {
          "restaurant": "onesta1-shivas-plaza-and-star-point-6th-main-gokulam-road-vv-mohalla-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "2927, Shivas Plaza and Star Point, Gokulam Main Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
        "locality": "Gokulam Main Road",
        "parentId": 11785,
        "unserviceable": false,
        "veg": false,
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
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "339458",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.20000000298023224,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70384",
        "name": "Pizza Hut",
        "uuid": "4f96695c-cc5d-4468-bc3b-f681f1002014",
        "city": "40",
        "area": "Mandi Mohalla",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "d1byzffj4ytgep09nue3",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "pizza-hut-temple-road-opp-loyal-world-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "# 1/2,6th Main, V V Mohalla, Temple Road, Opp Loyal World, Mysore 570002",
        "locality": "Kalidasa Road",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "70384",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "508798",
        "name": "The Kathi Roll Factory",
        "uuid": "4ad7ea23-6b47-4213-b35a-9dc6a45677a2",
        "city": "40",
        "area": "Jayalakhsmipuram",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "u3vumexxsyiw8vwe5j8c",
        "cuisines": [
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
          "restaurant": "the-kathi-roll-factory-mysore-north-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "#2790/2, adipampa road, vv mohalla, mysore, 570002",
        "locality": "Adipampa Road",
        "parentId": 210390,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
          "restaurantId": "508798",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
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
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "69629",
        "name": "Domino's Pizza",
        "uuid": "df3ad9f8-60c2-4376-96a5-50e3f3951a03",
        "city": "40",
        "area": "Jayalakhsmipuram",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "keyb5it6xvccyw0dj5bt",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "dominos-pizza-temple-road-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "2951/1, Temple Road, Next To Loyal World, V.V. Mohalla,Mysore Karnataka 570002",
        "locality": "Gokulam Main Road",
        "parentId": 2456,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "adTrackingID": "cid=6172782~p=7~eid=00000186-e507-7e13-0516-9e5700ec0753",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "hasSurge": false,
        "sla": {
          "restaurantId": "69629",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 0,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "448740",
        "name": "Hill Special Momos",
        "uuid": "7b195f53-d052-4d29-ac9b-79d86d41fe2d",
        "city": "40",
        "area": "Vijay Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "vdppbdlppwmvgnf3fydv",
        "cuisines": [
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "hill-special-momo’s-mysore-north-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "No.767, New kalidasa road, Vijayanagar1st stage, Mysore, 570012",
        "locality": "Kalidasa Road",
        "parentId": 270148,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "448740",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "598001",
        "name": "Chinese Wok",
        "uuid": "9bbd596e-4808-40e8-9bfa-b106268672e0",
        "city": "40",
        "area": "Mysore North",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "i9s8pgbnuaau4n2hrf5c",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "chinese-wok---wok-express-mysore-north-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "NO.2831, D-20 ( MAIN HOUSE ), NO.2831/1, D-17/2 ( OUT HOUSE ), GROUND FLOOR, 10TH CROSS, ADIPAMPA ROAD, VANIVILASAPURAM, DEVARAJA MOHALLA, V V MOHALLA, MYSORE, Mysore, Mysore, Karnataka-570002",
        "locality": "Adipampa Road",
        "parentId": 61955,
        "unserviceable": false,
        "veg": false,
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
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "598001",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "90781",
        "name": "Kolhapuri Bhel- Kuvempunagar",
        "uuid": "976e1dbf-1a5b-450e-ad3b-973f4edc0b15",
        "city": "40",
        "area": "Kuvempunagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ffpp3fiqq3odb0omrcdr",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "kolhapuri-bhel-kuvempunagar-mysore-south",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "511, Panchamantra Rd, E&F Block, Kuvempu Nagara, Mysuru, Karnataka 570023, India",
        "locality": "Panchamantra road",
        "parentId": 119795,
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
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 3400,
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
          "totalFees": 3400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3400",
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
        "adTrackingID": "cid=6160989~p=10~eid=00000186-e507-7e13-0516-9e5800ec0a21",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "90781",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "448127",
        "name": "Easy Bites by Hotel Empire",
        "uuid": "90244b1c-51a8-4336-bfce-99d50a8ca743",
        "city": "40",
        "area": "Gokulam",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
        "cuisines": [
          "Snacks",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "easy-bites-mysore-north-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "#2820/1, 8th Cross, Kalidasa Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
        "locality": "Kalidasa Road",
        "parentId": 8503,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "448127",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.4000000059604645,
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
        "id": "68262",
        "name": "Rasooi Magic",
        "uuid": "9bd57283-e3f3-4ba9-aaa2-4f9b41865eae",
        "city": "40",
        "area": "Jayalakhsmipuram",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ps9dig9gjeav77sksheb",
        "cuisines": [
          "Desserts",
          "Chinese",
          "North Indian",
          "Ice Cream",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "rasooi-magic-jayalakhsmipuram-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "16, Kalidasa Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
        "locality": "Kalidasa Road",
        "parentId": 20998,
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
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "68262",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "217183",
        "name": "Kailash Parbat - Fine Dine Restaurant",
        "uuid": "c092fe11-1dd7-43e6-a96f-719c8ba82526",
        "city": "40",
        "area": "Jayalakhsmipuram",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "xpbjrw6xsotlon4gxwcr",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "kailash-parbath-mysore-south-mysore-south",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "#2917, D-6, 8th Cross,6th Main, V V Mohalla,Mysore-570002 Karnataka",
        "locality": "Adipampa Road",
        "parentId": 393644,
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
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "adTrackingID": "cid=6110755~p=13~eid=00000186-e507-7e13-0516-9e5900ec0d34",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "217183",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
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
        "id": "396422",
        "name": "EatFit - All Things Healthy",
        "uuid": "2402a8dd-2342-4761-906f-7a0733631129",
        "city": "40",
        "area": "Jayalakhsmipuram",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "94d3bc5e6392fbaf50686cf8cfab10ef",
        "cuisines": [
          "Healthy Food",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 27000,
        "costForTwoString": "₹270 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "eatfit-vv-mohalla-road-panchavati-plaza-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "Panchavati plaza, No 86 D3/A, Kalidasa Road, VV Mohalla Road, Mysore 570012",
        "locality": "Kalidasa Road",
        "parentId": 76139,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "396422",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "683068",
        "name": "Starbucks Coffee",
        "uuid": "1e7df49b-a00e-4d4e-8b4c-81f68d0b4405",
        "city": "40",
        "area": "VV Mohalla",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "e902c6a9f81d35d2a347f2e6666a6462",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.20000000298023224,
        "slugs": {
          "restaurant": "starbucks-coffee-gokulam-main-rd-mysore-north",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "Tata Starbucks, Ground Floor , 2927, C/O Star Wing Building, Gokulam Main Rd, Vani Vilas Mohalla, Mysuru, Karnataka 570002",
        "locality": "Gokulam Main Rd",
        "parentId": 195515,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "lastMileTravelString": "0.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "683068",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.20000000298023224,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 20,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "197641",
        "name": "Oven Story Pizza",
        "uuid": "16b3ef64-536e-46c1-afa3-d5b2d28c767a",
        "city": "40",
        "area": "Vijayanagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "ovenstory-pizza-kalidasa-road-hebbal_myq",
          "city": "mysore"
        },
        "cityState": "40",
        "address": "774,1 st floor, Opp Niligiris,1 st stage, Devaraja mohalla, Kalidasa road, Vijayanagar Mysore 570017",
        "locality": "Kalidasa road",
        "parentId": 3534,
        "unserviceable": false,
        "veg": false,
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
              "fee": 1900,
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
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
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
        "adTrackingID": "cid=6184912~p=16~eid=00000186-e507-7e13-0516-9e5a00ec1039",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "197641",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
  ]

// const RestrauntCard =(props)=>{
//     const RestrauntCard =({restaurant})=>{ 
//     // console.log(props);
//     const{name,cuisines,lastMileTravelString,cloudinaryImageId} = restaurant.data;
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(", ")}</h3>
//             <h4>{lastMileTravelString} stars</h4>
//         </div>
//     )
// }

const RestrauntCard =({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{ 

    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} stars</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="restaurant-list">

        {
            restaurantList.map(restaurant=>{
              return  <RestrauntCard {...restaurant.data} key={restaurant.id}/>
            })
        }
            {/* <RestrauntCard {...restaurantList[0].data}/>
       <RestrauntCard {...restaurantList[1].data}/>
       <RestrauntCard {...restaurantList[2].data}/>
       <RestrauntCard {...restaurantList[3].data}/>
       <RestrauntCard  {...restaurantList[4].data}/> 
       <RestrauntCard  {...restaurantList[5].data}/>   
        <RestrauntCard  {...restaurantList[6].data}/>
       <RestrauntCard  {...restaurantList[7].data} />
       <RestrauntCard  {...restaurantList[8].data}/> */}
        </div>
       
    )
}

const Footer = () =>{
    return(
        <h4>Footer</h4>
    )
}

const AppLayout = () =>{
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
        
}



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);