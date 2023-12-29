// import logo from "./logo.svg";
// import "./App.css";

//
//   );
// }

// export default App;

import React from "react";
import ReactDom from "react-dom/client";
// import Header from "./components/Header.js";
// import Body from "./components/Body.js";
// const heading = React.createElement("h1", { id: "heading" }, "namste react");
// console.log(heading);
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li> Home</li>
          <li> About us</li>
          <li> Contact</li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, cuisines } = props.resData.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="pic"
        src=" https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33+cloudinaryImageId"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>4.3 stars </h4>
      <h4> 38 Mins</h4>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "164613",
      name: "El Mexicano",
      cloudinaryImageId: "yc37c1fbmghsz2u9wzmt",
      areaName: "Sector 8",
      costForTwo: "₹200 for two",
      cuisines: [
        "Mexican",
        "Tex-Mex",
        "Beverages",
        "Desserts",
        "Pizzas",
        "Fast Food",
      ],
      avgRating: 4.4,
      parentId: "11445",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10185229~p=5~eid=0000018c-b156-198e-196d-4ac400830528~srvts=1703782259086~45995",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=164613",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "106055",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "fco6bt4rjqr7hztnqwxo",
      locality: "Sec 27",
      areaName: "Sector 27",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "4961",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=106055",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "41297",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Sector 8",
      areaName: "Sector 8",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹179",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=41297",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "42240",
      name: "Domino's Pizza",
      cloudinaryImageId: "optvnubfaht7e0sjbwi5",
      locality: "Sector 8",
      areaName: "Sector 8 B",
      costForTwo: "₹700 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 01:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=42240",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "39846",
      name: "Jullundur Restaurant",
      cloudinaryImageId: "nucqrwxb3gy9ltewezaj",
      locality: "Sector 22",
      areaName: "Sector 22",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "Indian",
        "Chinese",
        "Tandoor",
        "Desserts",
        "Biryani",
        "Salads",
        "Seafood",
      ],
      avgRating: 4.4,
      parentId: "112066",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=9764949~p=6~eid=0000018c-b156-198e-196d-4ac500830644~srvts=1703782259086~45995",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=39846",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "41350",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Sector 35",
      areaName: "Sector 35",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=41350",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "254108",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "Sector 22",
      areaName: "Sector 22",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=254108",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "253843",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "g8sgqgoezae0yxgtbvvg",
      locality: "SCO 2446",
      areaName: "Sector 22",
      costForTwo: "₹100 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.7,
      veg: true,
      parentId: "582",
      avgRatingString: "4.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=253843",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "696998",
      name: "Cheesecake & co.",
      cloudinaryImageId: "40b0a201eadbec469c2f9a06d5e7c722",
      locality: "Sector 86",
      areaName: "Sector 16",
      costForTwo: "₹500 for two",
      cuisines: ["Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "387417",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=10201120~p=7~eid=0000018c-b156-198e-196d-4ac600830736~srvts=1703782259086~45995",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=696998",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "702966",
      name: "Theobroma",
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      locality: "Inner Market",
      areaName: "Sector 9",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "1040",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "ABOVE ₹179",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=702966",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "736524",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "c20e1dac93da0ec5fbf5ad97989cd7db",
      locality: "Sector 8-B",
      areaName: "Sector 8",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.2",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=736524",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "221310",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
      locality: "chandigarh†railway station",
      areaName: "Sector 22",
      costForTwo: "₹450 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      parentId: "4444",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=221310",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "340944",
      name: "Brown Baking Company",
      cloudinaryImageId: "a849d227df718301e98c7ae0749d4023",
      locality: "Sector 9",
      areaName: "Sector 8",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Snacks", "Beverages"],
      avgRating: 4.6,
      parentId: "50449",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=10190829~p=8~eid=0000018c-b156-198e-196d-4ac700830838~srvts=1703782259086~45995",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=340944",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "221311",
      name: "The Good Bowl",
      cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
      locality: "Railway Station Chandigarh",
      areaName: "Sector 22",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "7918",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=221311",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "42802",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      areaName: "Sector 19",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-28 23:58:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=42802",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "41175",
      name: "Taco Bell",
      cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
      locality: "Chandigarh",
      areaName: "Sector 35",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican"],
      avgRating: 4.2,
      parentId: "1557",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-29 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
        },
        freedelMessage: "FREE DELIVERY",
        badgeType: "BADGE_TYPE_ONE_LITE",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=41175",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {resObj.map((res, index) => (
          <RestaurantCard key={index} resData={res} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};
// const Title=()=> (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// );
// const HeadingComponent = () => (
//   return <h1 className="heading"> Namaste React </h1>;
// );

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
