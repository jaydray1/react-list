import * as React from "react";
import styled from "styled-components";
import "./groceryList.css";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  button {
    width: 2em;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid red;
  border-radius: 5px;
  list-style-type: none;
`;

export const GroceryList = props => {
  return (
    <>
      <div>
        <InputContainer>
          <form onSubmit={props.addItem} style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around"
              }}
            >
              <div>
                <span style={{ marginRight: "20px" }}>Add Item</span>
                <input
                  onChange={event =>
                    props.handleNewItem(event.currentTarget.value)
                  }
                  value={props.newListItem}
                  style={{
                    borderRadius: "3px",
                    height: "25px",
                    padding: "5px",
                    fontSize: "16px"
                  }}
                />
              </div>
              <button
                type="submit"
                className="the-button"
                style={{
                  width: "10em",
                  height: "3em",
                  borderRadius: "5px",
                  backgroundColor: "green",
                  color: "white"
                }}
              >
                Add Item
              </button>
            </div>
          </form>
        </InputContainer>
        <div>
          <ul>
            {props.listArr &&
              props.listArr.map((el, idx) => (
                <ListItem key={idx}>
                  {el}
                  <div style={{ justifyContent: "space-around" }}>
                    <button
                      onClick={() => props.deleteItem(idx)}
                      style={{
                        width: "10em",
                        height: "3em",
                        borderRadius: "5px",
                        backgroundColor: "red",
                        color: "white"
                      }}
                    >
                      Delete Item
                    </button>
                  </div>
                </ListItem>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GroceryList;
