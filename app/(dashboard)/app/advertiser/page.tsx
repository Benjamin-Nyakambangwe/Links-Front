import AdvertiserSitesTable from "@/components/common/AdvertiserSitesTable";
import MegaFilter from "@/components/common/MegaFilter";

export default function Dashboard() {
  return (
    <div>
      <MegaFilter />
      <AdvertiserSitesTable />
    </div>
  );
}
