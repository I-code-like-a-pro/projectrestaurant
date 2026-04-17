import React from "react";
import { Tabs } from "@chakra-ui/react";

const DishesTab = ({ dishes, categories }) => {
  return (
    <div>
      <div>
        <Tabs.Root>
          <Tabs.List>
            {dishes.map((dish) => (
              <Tabs.Trigger
                key={dish.id}
                value={dish.name}
                px="6"
                py="3"
                _selected={{
                  bg: "#f59e0b",
                  color: "#0a0a0a",
                }}
              ></Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default DishesTab;
