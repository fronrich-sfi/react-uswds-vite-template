import React, { FC, ReactNode } from "react";
import { Grid } from "@trussworks/react-uswds";

const GridCell: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Grid
      tablet={{
        col: true,
      }}
    >
      {children}
    </Grid>
  );
};

export default GridCell;
