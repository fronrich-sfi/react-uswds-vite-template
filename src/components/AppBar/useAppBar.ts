import { useState } from "react";

const useAppBar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggleExpand = (): void => setExpanded(!expanded);

  return { expanded, handleToggleExpand };
};

export default useAppBar;
