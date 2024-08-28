import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, MoveRight } from "lucide-react";
import { IconH3 } from "@tabler/icons-react";

export function AdvertiseLinkRequestStepper({ userType }) {
  console.log(userType);
  return (
    <Card className="w-[450px] mr-4">
      <CardHeader>
        <CardTitle>Link Request Steps</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full my-4 flex justify-between text-green-600 border-green-600"
          variant="outline"
        >
          <h4>1. Request Link</h4> <Check className="h-4 w-4" />
        </Button>

        {userType?.includes("advertiser") && (
          <Button
            className="w-full my-4 flex justify-between text-main border-main"
            variant="outline"
            disabled
          >
            <h4>2. Accept Link Request</h4> <MoveRight className="h-4 w-4" />
          </Button>
        )}

        <Button className="w-full my-4 flex justify-between" variant="outline">
          <h4>3. Initiate Payment</h4>
          <MoveRight className="h-4 w-4" />
        </Button>
        {userType?.includes("advertiser") && (
          <Button
            className="w-full my-4 flex justify-between"
            variant="outline"
            disabled
          >
            <h4>4. Link Inserted</h4>
            <MoveRight className="h-4 w-4" />
          </Button>
        )}
        <Button className="w-full my-4 flex justify-between" variant="outline">
          <h4>5. Link Approved</h4>
          <MoveRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
