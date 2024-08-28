import AdvertiseLinkRequestDetails from "@/components/common/AdvertiseLinkRequestDetails";
import { AdvertiseLinkRequestStepper } from "@/components/common/AdvertiserLinkRequestStepper";
import React from "react";
import { cookies } from "next/headers";

const SingleLinkRequestPage = () => {
  const cookieStore = cookies();
  const userType = cookieStore.get("user_details")?.value;
  return (
    <div className="flex justify-between mx-28 my-16">
      <AdvertiseLinkRequestStepper userType={userType} />
      <AdvertiseLinkRequestDetails />
    </div>
  );
};

export default SingleLinkRequestPage;
