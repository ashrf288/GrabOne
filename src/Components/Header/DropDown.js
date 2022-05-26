import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./header.css";
export default function DropDown(props) {
  return (
    <Dropdown flip >
      <Dropdown.Toggle className="drop-down dropright dropdown-menu-left">
        {props.trigger}
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop_down_menu  ">
        {props.data &&
          props.data.map((item, index) => {
            return (
              <>
                <Dropdown.Item
                
                  href={`#/${item}`}
                  key={index}
                  className="DropDown-item"
                >
                  {item}{" "}
                </Dropdown.Item>
                {props.data[index + 1] && (
                  <Dropdown.Divider style={{ margin: 0 }} />
                )}{" "}
              </>
            );
          })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
