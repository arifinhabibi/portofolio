import React from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Avatar,
  Button,
} from "@mui/material";

import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import StarsIcon from "@mui/icons-material/Stars";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

import { deepOrange } from "@mui/material/colors";

const drawerWidth = 250;

function SidebarComponent() {
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 2,
          }}>
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              height: 80,
              width: 80,
            }}
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
          />
        </Toolbar>
        <div className="block text-center mb-5 leading-none capitalize">
          <h3 className="font-medium mb-0">Muhammad Arifin Habibi</h3>
          <p className="mt-0 font-thin text-sm">website developer</p>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              marginTop: "10px",
            }}
            color="secondary">
            <DownloadForOfflineIcon
              sx={{
                marginRight: "2px",
              }}
            />{" "}
            Resume
          </Button>
        </div>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonSearchIcon />
              </ListItemIcon>
              <ListItemText primary={"Introduce"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Experiences"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={"Educations"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarsIcon />
              </ListItemIcon>
              <ListItemText primary={"Certificates"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary={"Media Social"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SidebarComponent;