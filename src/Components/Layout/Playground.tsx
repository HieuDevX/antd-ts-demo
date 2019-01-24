import * as React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Slider } from "antd";
import { SliderValue, SliderMarks } from "antd/lib/slider";

const Playground: React.FC = () => {
  let gutters: number[] = [];
  let colCounts: number[] = [];

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    gutters[i] = value;
  });
  [2, 3, 4, 6, 8, 12].forEach((value, i) => {
    colCounts[i] = value;
  });

  const [gutterKey, changeGutterKey] = useState(1);
  const [colCountKey, changeColCountKey] = useState(2);

  // const initialCols: any[] = [];
  // const [cols, updateCols] = useState(initialCols);
  // const initialColCount: number = (colCounts as number[])[
  //   colCountKey as number
  // ];
  // const [colCount, updateColCount] = useState(initialColCount);
  // const initialColCode: string = "";
  // const [colCode, updateColCode] = useState(initialColCode);

  // const updateColumnByColCountKey = (colCountKey: SliderValue) => {
  //   const cols = [];
  //   const colCount = (colCounts as number[])[colCountKey as number];
  //   let colCode = "";
  //   for (let i = 0; i < colCount; i++) {
  //     cols.push(
  //       <Col key={i.toString()} span={24 / colCount}>
  //         <div>Column</div>
  //       </Col>
  //     );
  //     colCode += `  <Col span={${24 / colCount}} />\n`;
  //   }
  //   updateCols(cols);
  //   updateColCount(colCount);
  //   updateColCode(colCode);
  // };

  // useEffect(() => {
  //   console.log(gutters);
  //   console.log(colCounts);
  //   console.log(gutterKey);
  //   console.log(colCountKey);

  //   updateColumnByColCountKey(colCountKey);
  // }, []);

  const updateColumnByColCountKey = (
    colCountKey: SliderValue
  ): { cols: any[]; colCode: string } => {
    let cols = [];
    let colCount = (colCounts as number[])[colCountKey as number];
    let colCode = "";
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </Col>
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }

    console.log(cols);
    console.log(colCount);
    console.log(colCode);

    return {
      cols: cols,
      colCode: colCode
    };
  };

  // handle event gutters slider change
  const handleGutterChange = (value: SliderValue) => {
    console.log(value);
    changeGutterKey(value as number);
  };

  // handle event columns slider change
  const handleColCountChange = (value: SliderValue) => {
    console.log(value);
    changeColCountKey(value as number);
    updateColumnByColCountKey(value);
  };

  return (
    <div id="components-grid-demo-playground">
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 6 }}>Gutter (px): </span>
        <div style={{ width: "50%" }}>
          <Slider
            min={0}
            max={gutters.length - 1}
            value={gutterKey}
            onChange={handleGutterChange}
            marks={gutters}
            step={null}
          />
        </div>
        <span style={{ marginRight: 6 }}>Column Count:</span>
        <div style={{ width: "50%" }}>
          <Slider
            min={0}
            max={colCounts.length - 1}
            value={colCountKey}
            onChange={handleColCountChange}
            marks={colCounts}
            step={null}
          />
        </div>
      </div>
      <Row gutter={gutters[gutterKey]}>
        {updateColumnByColCountKey(colCountKey).cols}
      </Row>
      <pre>{`<Row gutter={${gutters[gutterKey]}}>\n${
        updateColumnByColCountKey(colCountKey).colCode
      }</Row>`}</pre>
    </div>
  );
};

export default Playground;
