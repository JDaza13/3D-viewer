import { Portal, Select, createListCollection } from "@chakra-ui/react";

export type SelectorOption = {
  label?: string;
  value: string;
};

type ModelSelectorProps = {
  initialValue?: string[];
  options: SelectorOption[];
  onModelSelect: (modelPaths: string[]) => void;
};

const ModelSelector = ({ initialValue, options, onModelSelect }: ModelSelectorProps) => {
  return (
    <Select.Root
      collection={createListCollection({ items: options })}
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
            {options.map((o) => (
              <Select.Item item={o.value} key={o.value}>
                {o.label ?? o.value}
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
