import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuStyle from './Menu.module.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{ backgroundColor: "white" }}
        className="flex items-center gap-3 lg:gap-14"
        onClick={handleClick}
      >
        <p className="text-black py-1 px-3 font-semibold">Menu</p>
        <svg
          fill="#f66151"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24px"
          height="24px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
          stroke="#f66151"
          strokeWidth="3.2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58 c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022 c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="my-2"
      >
        <MenuItem onClick={handleClose} className={MenuStyle.menuItems}>
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} className={MenuStyle.menuItems}>
          Details
        </MenuItem>
        <MenuItem onClick={handleClose} className={MenuStyle.menuItems}>
          Category
        </MenuItem>
        <MenuItem onClick={handleClose} className={MenuStyle.menuItems}>
          My Favourite
        </MenuItem>
        <MenuItem onClick={handleClose} className={MenuStyle.menuItems}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} className={MenuStyle.menuItems}>
          Log In / Sign Up
        </MenuItem>
      </Menu>
    </div>
  );
}
