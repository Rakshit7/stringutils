import { Col, Row } from "antd";

const Header = () => {
  return (
    <Row
      style={{
        backgroundColor: "#234F1E",
        padding: "1.5%",
        marginBottom: "2rem",
      }}
    >
      <Col style={{ textAlign: "end" }} span={18} push={6}>
        <span style={{ color: "white", fontWeight: "200", fontSize: "2rem" }}>
          {window.localStorage.getItem("username")
            ? `Hello, ${window.localStorage.getItem("username")}`
            : ""}
        </span>
      </Col>
      <Col style={{ textAlign: "start" }} span={6} pull={18}>
        <span style={{ color: "black", fontWeight: "800", fontSize: "2rem" }}>
          String
        </span>
        <span style={{ color: "white", fontWeight: "200", fontSize: "2rem" }}>
          Util
        </span>
      </Col>
    </Row>
  );
};

export default Header;
