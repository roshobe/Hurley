import DashboardHeader from "../Components/DashboardHeader";
import Feed from "../Components/Feed";
import SideBar from "../Components/SideBar";
import { React, useState } from "react";
import Gallery from "../Components/ProductPage/gallery";
import ProductTracker from "../Components/ProductTracker";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import SubscriberStatisticsCard from "../Components/Cards/SubscriberStatisticsCard";

function ProductPage() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <DashboardHeader open={open} setOpen={setOpen} />
      <div className="flex flex-row w-full justify-between">
        <SideBar open={open} />
        <div className="flex flex-col justify-center">
          <div
            className="flex flex-row items-center
         "
          >
            <Gallery />
            <ProductDetails />
          </div>
          <SubscriberStatisticsCard />
          <ProductTracker />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductPage;
