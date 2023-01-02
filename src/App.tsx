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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { random } from "./utils";

export default function App() {
  window.document.title = `${document.domain.replace("www.", "").split(".")[0]
    }.${document.domain.replace("www.", "").split(".")[1]} - developer`;
  let { id } = useParams();
  const navigate = useNavigate();


  const [viewModal, setViewModal] = useState(true);

  useEffect(()=>{
    if(!id) navigate('/developer');
  },[])

  return (
    <>
      <Row
        className={"font-style-" + random(4)}
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
            <div className="floating title-text" key="a" style={{
              paddingBottom: 1
            }}>
              {document.domain.replace("www.", "").split(".")[0].replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())}
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
                //className={"font-style-" + random(4)}
              >
                {id?.replaceAll("-", " ").replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())}
              </label>
            </div>
            <div key="c" className="floating" style={{ padding: 5 }}>
              <QueueAnim delay={300}>
                <Button
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
                  href={"https://www.instagram.com/juanmansillaasenjo/"}
                >
                  <InstagramOutlined />
                </Button>
                <Button
                  key="d"
                  type="primary"
                  size="large"
                  shape="circle"
                  style={{ margin: 3 }}
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
                  //href="https://system.gabbo.dev/"
                  //target={"_blank"}
                  style={{ marginTop: 20, marginLeft: 5 }}
                  onClick={() => setViewModal(!viewModal)}
                  hidden
                >
                  Ver Skills
                </Button>
              </QueueAnim>
            </div>
          </QueueAnim>
        </Col>
        <Col style={{
          width: "60%", height: "60%", background: "white", margin: "auto"
        }} hidden={viewModal}>

        </Col>
      </Row>
    </>
  );
}
