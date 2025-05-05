// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// interface Props {
//   gap: string;
//   onChange: (value: string) => void;
// }

// const CustomGapSelector = ({ gap, onChange }: Props) => {
//   console.log("gap", gap);
//   return (
//     <Select
//       value={gap}
//       onValueChange={(value) => {
//         onChange(value);
//       }}
//     >
//       <SelectTrigger className="w-[150px]">
//         <SelectValue placeholder="Khoảng cách" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="mb-0">None</SelectItem>
//         <SelectItem value="mb-4">12px</SelectItem>
//         <SelectItem value="mb-5">16px</SelectItem>
//         <SelectItem value="mb-6">20px</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// };

// export default CustomGapSelector;
