import React from "react";

import { ReloadIcon } from "@radix-ui/react-icons";
import { ResponsiveContainer } from "recharts";

import { BarChartMultiDataPoint, ChartDataPoint } from "@/types/chart";

import { AssistantModal } from "../../assistant-modal";
import { Button } from "../../button";
import { CalendarDatePicker } from "../../calendar/index";

export interface ChartContainerProps {
  data: Array<ChartDataPoint> | Array<BarChartMultiDataPoint>;
  dataSet: Array<ChartDataPoint> | Array<BarChartMultiDataPoint>;
  setDataSet: React.Dispatch<
    React.SetStateAction<Array<ChartDataPoint> | Array<BarChartMultiDataPoint>>
  >;
  height: number;
  earliestDate: Date;
  latestDate: Date;
  filterDataByDateRange: (range: { from: Date; to: Date }) => void;
  enableAssistantMode?: boolean;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>; // This will be the BaseAreaChart
  disabled?: boolean;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  data,
  dataSet,
  setDataSet,
  height,
  earliestDate,
  latestDate,
  filterDataByDateRange,
  enableAssistantMode = false,
  children,
  disabled = false,
}) => {
  const disabledClassName = disabled ? "skeleton-box opacity-15" : "";
  return (
    <div className={`flex flex-col gap-2`}>
      <div className="flex items-center gap-2">
        <CalendarDatePicker
          date={{ from: earliestDate, to: latestDate }}
          onDateSelect={(range: { from: Date; to: Date }) => {
            filterDataByDateRange(range);
          }}
        />
        {dataSet.length !== data.length && (
          <Button className="rounded-full" onClick={() => setDataSet(data)}>
            <ReloadIcon />
          </Button>
        )}
      </div>
      <ResponsiveContainer
        width="100%"
        height={height}
        className={`flex flex-col gap-2 ${disabledClassName}`}
      >
        {children}
      </ResponsiveContainer>
      {enableAssistantMode && (
        <div className="relative flex items-center gap-2">
          <AssistantModal className="relative my-[2%]" />
        </div>
      )}
    </div>
  );
};
