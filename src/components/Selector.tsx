import { Portal, Select, createListCollection } from "@chakra-ui/react";

const models = createListCollection({
  items: [
    { label: "Car", value: "/car.glb" },
    { label: "Battery", value: "/car_battery.glb" },
    { label: "Planet", value: "/planet.glb" },
    { label: "Spaceship", value: "/spaceship.glb" },
  ],
});

type ModelSelectorProps = {
  initialValue?: string[];
  onModelSelect: (modelPaths: string[]) => void;
};

const ModelSelector = ({ initialValue, onModelSelect }: ModelSelectorProps) => {
  return (
    <Select.Root
      collection={models}
      size="sm"
      width="100%"
      maxWidth="350px"
      className="model-selector"
      multiple={false}
      value={initialValue}
      onValueChange={(e) => onModelSelect(e.value)}
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select model" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {models.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default ModelSelector;
