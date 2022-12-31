import {
  BookOutlined,
  BulbOutlined,
  CheckOutlined,
  CloseOutlined,
  ContactsOutlined,
  HomeOutlined,
  NodeIndexOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useWindowSize } from "@react-hook/window-size";
import { Button, Menu, Switch } from "antd";
import { Content } from "antd/lib/layout/layout";
import QueueAnim from "rc-queue-anim";
import { Link, useParams } from "react-router-dom";
import { LinkedAnimate } from "./LinkedAnimated";

type Props = {
  children: JSX.Element;
};

export default function LayoutComponent(props: Props) {

  const [width, height] = useWindowSize()
  let { id } = useParams();

  return (
    <>
      <div>
        <QueueAnim delay={800}>
          <LinkedAnimate width={width} heigth={height} />
        </QueueAnim>
      </div>
      <div
        style={{
          margin: "auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Menu hidden={true}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="horizontal"
          theme="light"
          inlineCollapsed={true}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to={`/`}>Sobre mi</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<SolutionOutlined />}>
            <Link to={`/works`}>Portafolio</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<NodeIndexOutlined />}>
            <Link to={`/experience`}>Experiencia</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NodeIndexOutlined />}>
            <Link to={`/skils`}>skils</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<ContactsOutlined />}>
            <Link to={`/contact`}>Contacto</Link>
          </Menu.Item>
        </Menu>
      </div>

      <Content style={{ overflow: "initial" }}>{props.children}</Content>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: 20,
        }}
      >
        <p hidden={true}>
          <Switch
            style={{ margin: 2 }}
            defaultChecked
            checkedChildren={<>Light</>}
            unCheckedChildren={<>Dark</>}
          />
        </p>
      </div>
    </>
  );
}
