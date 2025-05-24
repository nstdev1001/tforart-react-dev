import { lineSpinner } from "ldrs";

const LineSpinerLoading = () => {
  lineSpinner.register();
  return <l-line-spinner size="40" speed="1.5" color="gray"></l-line-spinner>;
};

export default LineSpinerLoading;
