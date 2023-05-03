import React, { useMemo, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./Sidebar";
import "./main.css";

const data = [
  {
    email: "kyctest@gmail.con",
    businessname: "yeywy",
    randomString: "foobar",
  },
  {
    email: "testemail@testemail.com",
    businessname: "test business ct signup flow",
    randomString: "bazqux",
  },
  {
    email: "adt@gmail.com",
    businessname: "yfufuvigyf",
    randomString: "loremipsum",
  },
  {
    email: "bsbsjbhdid@hdid.so",
    businessname: "gsjsnz",
    randomString: "dolorsit",
  },
  {
    email: "4ge@gmail.xon",
    businessname: "42r3r3",
    randomString: "ametconsectetur",
  },
  {
    email: "jdjdjdjd@hdh.jd",
    businessname: "testbfmfkk",
    randomString: "adipiscingelit",
  },
];

const sidebarDetail = [
  {
    key: "Email",
    value: "gdgsh@gmail.com",
  },
  {
    key: "Id",
    value: "b17b8039-16d4-4531-8a0f-d43dde0a42ce",
  },
  {
    key: "No Of Employees",
    value: "1",
  },
  {
    key: "Business Type Name",
    value: "Education",
  },
  {
    key: "Country Code",
    value: "GBR",
  },
  {
    key: "City Or Town",
    value: "x5xtxt",
  },
  {
    key: "Address Postal Code",
    value: "XTT",
  },
  {
    key: "Company Type",
    value: "SOLE_TRADER",
  },
  {
    key: "Crn",
    value: "",
  },
  {
    key: "Trading Name",
    value: "hzhzhs",
  },
  {
    key: "Legal Business Name",
    value: "hzhzhs",
  },
  {
    key: "Address Line 1",
    value: "ygzxx",
  },
  {
    key: "Address Line 2",
    value: "z5txtxx",
  },
  {
    key: "First Name",
    value: "jdjdjd",
  },
  {
    key: "Last Name",
    value: "syssy",
  },
  {
    key: "Phone Country Code",
    value: "44",
  },
  {
    key: "Phone Number",
    value: "67676794949",
  },
  {
    key: "Status",
    value: "IN REVIEW",
  },
  {
    key: "Reject Remarks",
    value: "",
  },
  {
    key: "Primary Bank Account Id",
    value: "",
  },
  {
    key: "Allow Marketing Emails",
    value: "Yes",
  },
  {
    key: "Device Token",
    value:
      "cUeHaNz0L07jjxPm9PVnR0:APA91bF9JbAA80KIFPW76h81n3SIJqjIEsKU5zN0u6iCO4v0TQ7dhdRh8STOC99GptMbcs4XM11B2GGmT5jc1mZSYUsT2MuvsJfNBRtRxvAQhOu_fYZHkpynSLuaBlkOkGymPHTdj5zm",
  },
  {
    key: "Enable Notifications",
    value: "Yes",
  },
  {
    key: "Referral Code",
    value: "2051",
  },
  {
    key: "Referral By",
    value: "",
  },
  {
    key: "Created At",
    value: "2023-03-23T06:32:12.202Z",
  },
  {
    key: "Updated At",
    value: "2023-03-23 12:02",
  },
  {
    key: "Employee Referral Code",
    value: "",
  },
  {
    key: "Internal User",
    value: "No",
  },
  {
    key: "Tip Enabled",
    value: "Yes",
  },
  {
    key: "Consumer Referral By",
    value: "",
  },
  {
    key: "Source Of Install",
    value: "NEWS ARTICLE BLOG",
  },
  {
    key: "Custom Referral Code",
    value: "",
  },
  {
    key: "Use Masked Sms",
    value: "Yes",
  },
];

const Example = () => {
  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#2767C6",
            dark: "#15376A",
            light: "#F4F8FD",
          },
          success: {
            main: "#25C348",
            light: "#F4FCF6",
          },
          warning: {
            main: "#F0873A",
            light: "#FEF9F5",
          },
          error: {
            main: "#EC5B5B",
            light: "#FDEFEF",
          },
        },
        typography: {
          fontSize: 14,
          fontWeightRegular: 400,
          fontWeightMedium: 600,
          fontWeightBold: 700,
          fontFamily: "Inter",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 100,
                fontWeight: 600,
                textTransform: "none",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                backgroundColor: "#2767C6",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#15376A",
                },
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              head: {
                color: "#15376A",
              },
              body: {
                color: "#15376A",
              },
            },
          },
        },
      }),
    []
  );
  const columns = useMemo<MRT_ColumnDef<(typeof data)[0]>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "businessname",
        header: "Business Name",
      },
      {
        accessorKey: "randomString",
        header: "Random String",
      },
    ],
    [] //end
  );

  interface User {
    email: string;
    businessname: string;
  }

  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedRowDetail, setSelectedRowDetail] = useState<User[]>([]);

  return (
    <ThemeProvider theme={tableTheme}>
      <MaterialReactTable
        columns={columns}
        data={data}
        muiTablePaperProps={{
          elevation: 0, //change the mui box shadow
          //customize paper styles
          sx: {
            borderRadius: "0",
            padding: "24px",
          },
        }}
        muiTableBodyProps={{
          sx: (theme) => ({
            //stripe the rows, make even rows a darker color
            "& tr:nth-of-type(even)": {
              backgroundColor: theme.palette.primary.light,
            },
          }),
        }}
        muiTableHeadCellProps={{
          sx: {
            borderRight: "1px solid #E5E5E5", //add a border between columns
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            borderBottom: "0",
            borderRight: "1px solid #E5E5E5", //add a border between columns
          },
        }}
        muiTableBodyRowProps={({ row }) => ({
          //row selection
          onClick: () => {
            setShowSidebar(true);
            setSelectedRowDetail([row.original]);
          },
          sx: {
            cursor: "pointer",
          },
        })}
      />
      {showSidebar && (
        <div className="sidebar_wrapper">
          <button
            className="close_sidebar_btn"
            onClick={() => setShowSidebar((prevState) => !prevState)}
          >
            {">"}
          </button>
          <div className="sidebar-container">
            <Sidebar
              selectedRowDetail={selectedRowDetail}
              sidebarDetail={sidebarDetail}
            />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
};

export default Example;
