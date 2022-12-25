import "./App.css";
import { Col, Row } from "antd";
import { Button } from "antd";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PlusOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import "./less/main.less";
import { useEffect } from "react";

export default function App() {
  window.document.title = `${document.domain.replace("www.", "").split(".")[0]
    }.${document.domain.replace("www.", "").split(".")[1]} - developer`;

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
            <div className="floating title-text" key="a">
              {document.domain.replace("www.", "").split(".")[0]}
              <label
                className="floating"
                style={{
                  opacity: 0.6,
                }}
              >
                .{document.domain.replace("www.", "").split(".")[1]}
              </label>
            </div>
            <div key="b" className="subtitle-text floating">
              <label
                style={{
                  opacity: 0.6,
                }}
              >
                DEVELOPER
              </label>
            </div>
            <div key="c" className="floating">
              <QueueAnim delay={300}>
                <Button
                  hidden
                  key="b"
                  type="primary"
                  size="large"
                  shape="circle"
                  style={{ margin: 3 }}
                  target={"_blank"}
                  href={"https://github.com/JuanMAA"}
                >
                  <GithubOutlined />
                </Button>
                <Button
                  key="c"
                  type="primary"
                  size="large"
                  shape="circle"
                  style={{ margin: 3 }}
                  target={"_blank"}
                  href={"https://www.instagram.com/gabbo.dev/"}
                >
                  <InstagramOutlined />
                </Button>
                <Button
                  key="d"
                  type="primary"
                  size="large"
                  shape="circle"
                  style={{ margin: 3 }}
                  target={"_blank"}
                  href={"https://www.twitter.com/gabbodev/"}
                >
                  <TwitterOutlined />
                </Button>
                <Button
                  key="a"
                  type="primary"
                  size="large"
                  shape="circle"
                  style={{ margin: 3 }}
                  target={"_blank"}
                  href={
                    "https://www.linkedin.com/in/juangabrielmansillaasenjo/"
                  }
                >
                  <LinkedinOutlined />
                </Button>
                <Button
                  key="e"
                  type="primary"
                  size={"large"}
                  shape="round"
                  href="https://system.gabbo.dev/"
                  target={"_blank"}
                  style={{ marginTop: 20, marginLeft: 5 }}
                  hidden
                >
                  Portafolio <PlusOutlined />
                </Button>
              </QueueAnim>
            </div>
          </QueueAnim>
        </Col>
      </Row>
    </>
  );
}
