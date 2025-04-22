import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomGapSelector = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Khoảng cách" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mb-4">12px</SelectItem>
        <SelectItem value="mb-5">16px</SelectItem>
        <SelectItem value="mb-6">20px</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CustomGapSelector;
