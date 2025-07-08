import { FaSeedling, FaIndustry, FaBoxOpen, FaTruck } from "react-icons/fa";
import { FaFlag, FaGlobeAfrica, FaMapMarkerAlt } from "react-icons/fa";


export const services = [
    {
      title: "Cultivation",
      description: "Sustainable farming practices from rich Nigerian soils to produce premium grain.",
      icon: <FaSeedling />,
    },
    {
      title: "Processing",
      description: "Advanced technology preserves nutrients and guarantees top quality.",
      icon: <FaIndustry />,
    },
    {
      title: "Packaging",
      description: "Safe, hygienic packaging to retain freshness and flavor of every grain.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Delivery",
      description: "Efficient distribution, ensuring timely and safe arrival to your location.",
      icon: <FaTruck />,
    },
  ];

  export const regions = [
      {
        location: "Nigeria",
        description: "Delivering premium rice to every state nationwide with reliable distribution.",
        icon: <FaMapMarkerAlt />,
      },
      {
        location: "West Africa",
        description: "Expanding supply to nearby West African countries with efficient logistics.",
        icon: <FaGlobeAfrica />,
      },
      {
        location: "Global",
        description: "Meeting international export standards for partners across the world.",
        icon: <FaFlag />,
      },
    ];