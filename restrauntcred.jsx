
import { useState, useEffect } from "react"
import Shimmer from "./shimmer";

export function Restraurantcard() {
  
const restaurantses = [
    {
      info: {
        "id": "158827",
        name: "Mr. Chop Shop",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/noyen2bkfettg5hlu2wr",
        "locality": "Karamchari Colony",
        "areaName": "Alwar Locality",
        "costForTwo": "₹300 for two",
        cuisines: [
          "Chinese", "Burgers", "Pizzas", "Biryani",

        ],
        avgRating: 4.1,
        "parentId": "10135",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        sla: {
          deliveryTime: 28,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          slaString: "25-30 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:59:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/mr-chop-shop-karamchari-colony-alwar-locality-rest158827",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "583144",
        name: "Burger Singh",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591",
        "locality": "Vivek Vihar",
        "areaName": "Basant Vihar",
        "costForTwo": "₹300 for two",
        cuisines: [
          "Burgers",
          "Snacks",
          "Fast Food",

        ],
        avgRating: 4.5,
        "parentId": "375065",
        "avgRatingString": "4.5",
        "totalRatingsString": "539",
        sla: {
          deliveryTime: 24,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          slaString: "20-25 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/burger-singh-big-punjabi-burgers-vivek-vihar-basant-vihar-rest583144",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "494351",
        name: "NIC Ice Creams",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85825a6d74b1059a63a9b688de9f67ce",
        "locality": "Tej Mandi",
        "areaName": "Alwar",
        "costForTwo": "₹120 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "776",
        sla: {
          deliveryTime: 26,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          slaString: "25-30 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/nic-ice-creams-tej-mandi-alwar-rest494351",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "148027",
        name: "Pizza Hut",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/0695ff91-d58a-4c98-9c62-c20698e8c6d4_148027.jpg",
        "locality": "Karamchari Colony",
        "areaName": "Basant Vihar",
        "costForTwo": "₹350 for two",
        cuisines: [
          "Pizzas"
        ],
        avgRating: 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.4K+",
        sla: {
          deliveryTime: 30,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          slaString: "25-30 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:59:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/pizza-hut-karamchari-colony-basant-vihar-rest148027",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "158296",
        name: "Praveen Sai Bakers",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gwfhhhc7s9btk12f05ju",
        "locality": "Sector 7",
        "areaName": "Alwar Locality",
        "costForTwo": "₹200 for two",
        cuisines: [
          "South Indian",
          "Chinese",
          "Fast Food",
        ],
        avgRating: 4.1,
        "parentId": "160797",
        "avgRatingString": "4.1",
        "totalRatingsString": "23K+",
        sla: {
          deliveryTime: 31,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          slaString: "30-35 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 22:30:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/praveen-sai-bakers-and-fast-food-sector-7-alwar-locality-rest158296",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "716626",
        name: "Burger Farm",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z5oxnmxibksgrt4l3vv3",
        "locality": "Panchwati",
        "areaName": "Basant Vihar",
        "costForTwo": "₹500 for two",
        cuisines: [
          "Indian",
          "Burgers"
        ],
        avgRating: 4.4,
        "parentId": "4660",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.1K+",
        sla: {
          deliveryTime: 27,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          slaString: "25-30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:59:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/burger-farm-panchwati-basant-vihar-rest716626",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "481506",
        name: "Mama Mia Pizza",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qotw25xz8rc6axqjqz5i",
        "locality": "Jail Circle",
        "areaName": "Basant Vihar",
        "costForTwo": "₹300 for two",
        cuisines: [
          "Pizzas",
          "Italian"
        ],
        avgRating: 4.3,
        "veg": true,
        "parentId": "131084",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.3K+",
        sla: {
          deliveryTime: 30,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          slaString: "30-35 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/mama-mia-pizza-jail-circle-basant-vihar-rest481506",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "501529",
        name: "Sai Bakers",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_716626.JPG",
        "locality": "Lajpat Nagar",
        "areaName": "Scheme 2",
        "costForTwo": "₹100 for two",
        cuisines: [
          "Burgers",
          "Pizzas"
        ],
        avgRating: 4.2,
        "veg": true,
        "parentId": "174909",
        "avgRatingString": "4.2",
        "totalRatingsString": "877",
        sla: {
          deliveryTime: 25,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          slaString: "20-25 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:00:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/sai-bakers-lajpat-nagar-scheme-2-rest501529",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "161374",
        name: "Mahaveer Dhaba",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nsy4ur6mxrogvx9ttbzn",
        "locality": " Station Road",
        "areaName": "Basant Vihar",
        "costForTwo": "₹200 for two",
        cuisines: [
          "Indian",
          "Chinese"
        ],
        avgRating: 3.9,
        "veg": true,
        "parentId": "130030",
        "avgRatingString": "3.9",
        "totalRatingsString": "13K+",
        sla: {
          deliveryTime: 33,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          slaString: "30-35 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/mahaveer-dhaba-station-road-basant-vihar-rest161374",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "340095",
        name: "Vadilal Ice Creams",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cuy9dyfaae42cqm3m2z4",
        "locality": "MURTI MOHALLA",
        "areaName": "DAUDPUR",
        "costForTwo": "₹300 for two",
        cuisines: [
          "Ice Cream",
          "Desserts",
          "Cakes",
        ],
        avgRating: 4.7,
        "veg": true,
        "parentId": "11745",
        "avgRatingString": "4.7",
        "totalRatingsString": "293",
        sla: {
          deliveryTime: 27,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          slaString: "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 19:33:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/vadilal-ice-creams-murti-mohalla-daudpur-rest340095",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "861521",
        name: "Pastas By Pizza Hut",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/044460ea-3607-48cc-a9ad-df066242e069_861521.jpg",
        "locality": "Karamchari Colony",
        "areaName": "Basant Vihar",
        "costForTwo": "₹400 for two",
        cuisines: [
          "Pastas"
        ],
        avgRating: 3.8,
        "parentId": "306806",
        "avgRatingString": "3.8",
        "totalRatingsString": "11",
        sla: {
          deliveryTime: 33,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          slaString: "30-35 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:59:00",
          "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {

            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/pastas-by-pizza-hut-karamchari-colony-basant-vihar-rest861521",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        "id": "494353",
        name: "Grameen Kulfi",
        cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/txoqjg783ahkjqdol1s6",
        "locality": "Old Station Road",
        "areaName": "Alwar",
        "costForTwo": "₹120 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.6,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.6",
        "totalRatingsString": "266",
        sla: {
          deliveryTime: 26,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          slaString: "25-30 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-26 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {

      },
      "cta": {
        "link": "https://www.swiggy.com/city/alwar/grameen-kulfi-old-station-road-alwar-rest494353",
        "type": "WEBLINK"
      }
    },
  ]

  const [count, setcount] = useState("")
  const [serachtext, setsearchtext] = useState(restaurantses);


  const [allrestraunts, setallrestraunts] = useState([]);


  // useEffect(() => {
  //   getdata()
  // }, []);

  // async function getdata() {

  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5703203&lng=76.6472092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const json = await data.json();

  //   setsearchtext(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants);
  //   setallrestraunts(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants);
  // }
  const click = (count, serachtext) => {

    if (count === "") {
      alert("please enter the name")
    }

    const filter = serachtext.filter((check) =>

      check.info.name.toLowerCase().includes(count.toLowerCase())

    )
    return filter;
  }

// if(serachtext.length===0){
//   return (
//     <>
//     <div className="input-button">
//     <div className="input-class">
      
//      <input type="text" placeholder="search" className="search-input" value={count} onChange={(e) => { setcount(e.target.value) }}></input>
        

//         </div>
//       <div className="button-class">
//         <button onClick={() => { const data = click(count, allrestraunts); setsearchtext(data) }} type="button" className="search-btn">Search</button>
//       </div>
//     </div>
// <h1>no recourd</h1>
// </>
//   )
// }

 


  return serachtext.length===0?<Shimmer/>:(
    <>
  <div className="input-button">
      <div className="input-class">
       <input type="text" placeholder="search" className="search-input"value={count} onChange={(e) => { setcount(e.target.value) }}></input>
          </div>
        <div className="button-class">
          <button onClick={() => { const data = click(count,restaurantses);setsearchtext(data) }} type="button" className="search-btn">Search</button>
        </div>
      </div>
      <div className="card">
        { 
          serachtext.map((check) => {
            return(
              <>
                <div className="card2">
                  <img src={check.info?.cloudinaryImageId}></img>
                  <div className="card3">
                    <h1>{check.info?.name}</h1>
                  </div>
                  <div className="card4">
                    <div className="card5">
                      <img src={check.info?.ratingimage}></img>
                    </div>
                    <div className="card6">
                      <span><h5>{check.info?.avgRating}</h5></span>
                      <h5>{check.info?.deliveryTime}</h5>
                    </div>
                    <div className="card7">
                      <div className="card8">
                        <h4>{check.info?.cuisines.join(",")}</h4>
                      </div>
                      <div className="card9">
                        <h4>{check.info?.sla?.slaString}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
          
      </div >

  </>
   )  


}


