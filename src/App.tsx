import "./App.css";
import { Col, Row } from "antd";
import { Button } from "antd";
import {
  BehanceOutlined,
  GithubOutlined,
  HomeOutlined,
  InstagramOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import "./less/main.less";
import { LinkedAnimate } from "./components/LinkedAnimated";

export default function App() {
  return (
    <>
      <Row
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          textAlign: "center",
        }}
      >
        <Col
          xs={24}
          style={{
            margin: "auto",
          }}
          xl={24}
        >
          <QueueAnim delay={800}>
            <div
              className="floating title-text"
              key="a"
            >
              {document.domain.replace("www.", "").split(".")[0]}
              <label
                className="floating"
                style={{
                  opacity: 0.5,
                }}
              >
                .{document.domain.replace("www.", "").split(".")[1]}
              </label>
            </div>
            <div
              key="b"
              className="subtitle-text floating"
            >
              <label
                style={{
                  opacity: 0.8,
                }}
              >
                FULL STACK DEVELOPER
              </label>
            </div>
            <div key="c" className="floating">
              <QueueAnim delay={300}>
                <Button
                  key="a"
                  type="primary"
                  size="middle"
                  shape="circle"
                  style={{ margin: 3 }}
                >
                  <BehanceOutlined />
                </Button>
                <Button
                  key="b"
                  type="primary"
                  size="middle"
                  shape="circle"
                  style={{ margin: 3 }}
                >
                  <GithubOutlined />
                </Button>
                <Button
                  key="c"
                  type="primary"
                  size="middle"
                  shape="circle"
                  style={{ margin: 3 }}
                >
                  <InstagramOutlined />
                </Button>
                <Button
                  key="d"
                  type="primary"
                  size="middle"
                  shape="circle"
                  style={{ margin: 3 }}
                >
                  <TwitterOutlined />
                </Button>
                <Button
                  key="e"
                  type="primary"
                  size={"middle"}
                  shape="round"
                  hidden={true}
                  style={{ marginTop: 20, marginLeft: 5 }}
                >
                  Conocer más <PlusOutlined />
                </Button>
              </QueueAnim>
            </div>
          </QueueAnim>
        </Col>
      </Row>
    </>
  );
}
