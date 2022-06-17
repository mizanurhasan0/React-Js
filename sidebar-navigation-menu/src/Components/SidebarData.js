import GridViewIcon from "@mui/icons-material/GridView";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CollectionsIcon from "@mui/icons-material/Collections";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import BarChartIcon from "@mui/icons-material/BarChart";
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <GridViewIcon />,
    link: "/home",
  },
  {
    title: "Widgets",
    icon: <WidgetsIcon />,
    link: "/widgets",
  },
  {
    title: "Charts",
    icon: <BarChartIcon />,
    link: "/charts",
  },
  {
    title: "Tables",
    icon: <BackupTableIcon />,
    link: "/tables",
  },
  {
    title: "Gallery",
    icon: <CollectionsIcon />,
    link: "/gallery",
  },
];
