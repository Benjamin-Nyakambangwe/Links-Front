import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AdvertiseLinkRequestDetails: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Link Request Details
        </CardTitle>
        <CardDescription className="text-center text-yellow-500 font-semibold">
          Request Status: Awaiting Payment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex flex-col">
              <Image
                src="/img/android-police.png"
                alt="Advertiser"
                width={350}
                height={250}
                className="rounded-xl"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">Advertiser</h3>
                <p className="font-medium">Ben Nyakaz</p>
                <p className="text-sm text-gray-500">
                  bennyakaz@mailinator.com
                </p>
              </div>
            </div>
            <p>
              <span className="font-medium">Target URL:</span>{" "}
              https://www.thehumancapitalhub.com/articles/intel-layoffs-analyzing-semiconductor-industry
            </p>
            <p>
              <span className="font-medium">Link Type:</span> Do Follow
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <Image
                src="/img/9-5.png"
                alt="Publisher"
                width={350}
                height={250}
                className="rounded-xl"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">Publisher</h3>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">john@mailinator.com</p>
              </div>
            </div>
            <p>
              <span className="font-medium">Request URL:</span> www.test.com
            </p>
            <p>
              <span className="font-medium">Anchor Text:</span> Allow Link
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-2xl font-bold text-green-600">$245</div>
      </CardFooter>
    </Card>
  );
};

export default AdvertiseLinkRequestDetails;
