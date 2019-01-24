import * as React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Slider } from "antd";
import { SliderValue, SliderMarks } from "antd/lib/slider";

const Playground: React.FC = () => {
  let gutters: {} = {};
  let colCounts: {} = {};

  [8, 16, 24, 32, 40, 48].forEach((value, i) => {
    (gutters as number[])[i] = value;
  });
  [2, 3, 4, 6, 8, 12].forEach((value, i) => {
    (colCounts as number[])[i] = value;
  });

  const initialGutterKey = 1 as SliderValue;
  const initialCountKey = 2 as SliderValue;
  // which gutters' option was chose
  const [gutterKey, changeGutterKey] = useState(initialGutterKey);
  // which columns' option was chose
  const [colCountKey, changeColCountKey] = useState(initialCountKey);

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

  // useEffect(() => {
  //   console.log(gutters);
  //   console.log(colCounts);
  //   console.log(gutterKey);
  //   console.log(colCountKey);

  //   updateColumnByColCountKey(colCountKey);
  // }, []);

  // handle event gutters slider change
  const handleGutterChange = (value: SliderValue) => {
    console.log(value);
    changeGutterKey(value);
  };

  // handle event columns slider change
  const handleColCountChange = (value: SliderValue) => {
    console.log(value);
    changeColCountKey(value);
    updateColumnByColCountKey(value);
  };

  return (
    <div id="components-grid-demo-playground">
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 6 }}>Gutter (px): </span>
        <div style={{ width: "50%" }}>
          <Slider
            min={0}
            max={Object.keys(gutters).length - 1}
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
            max={Object.keys(colCounts).length - 1}
            value={colCountKey}
            onChange={handleColCountChange}
            marks={colCounts}
            step={null}
          />
        </div>
      </div>
      <Row gutter={(gutters as number[])[gutterKey as number]}>
        {updateColumnByColCountKey(colCountKey).cols}
      </Row>
      <pre>{`<Row gutter={${(gutters as number[])[gutterKey as number]}}>\n${
        updateColumnByColCountKey(colCountKey).colCode
      }</Row>`}</pre>
    </div>
  );
};

export default Playground;
