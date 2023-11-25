import { Row, Col, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import {
  convertToLowercase,
  convertToUppercase,
  removeDuplicate,
  removeSpace,
} from "../utils/stringFunctions";

const StringInput = () => {
  const [textVal, setTextVal] = useState("");

  return (
    <>
      <Row justify={"center"} style={{ marginBottom: "16px" }}>
        <Col xs={24} md={12} lg={12}>
          <TextArea
            value={textVal}
            onChange={(e: any) => setTextVal(e.target.value)}
            rows={1}
          />
        </Col>
      </Row>
      <Row justify={"center"} gutter={[0, 16]}>
        <Col xs={24} md={12} lg={24}>
          <Button onClick={() => setTextVal(convertToUppercase(textVal))}>
            Convert To Uppercase
          </Button>
        </Col>
        <Col xs={24} md={12} lg={24}>
          <Button onClick={() => setTextVal(convertToLowercase(textVal))}>
            Convert To Lowercase
          </Button>
        </Col>
        <Col xs={24} md={12} lg={24}>
          <Button onClick={() => setTextVal(removeDuplicate(textVal))}>
            Remove Duplicate Word
          </Button>
        </Col>
        <Col xs={24} md={12} lg={24}>
          <Button onClick={() => setTextVal(removeSpace(textVal))}>
            Remove Space
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default StringInput;
