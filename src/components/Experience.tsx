import {
  AuditOutlined,
  BankOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row, Tag, Timeline } from "antd";
import Title from "antd/lib/typography/Title";
import QueueAnim from "rc-queue-anim";

export default function ExperienceComponent() {
  return (
    <Row
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        textAlign: "center",
      }}
    >
      <Col xs={24} style={{ textAlign: "center", margin: "auto" }}>
        <QueueAnim
          delay={100}
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] },
          ]}
        >
          <div key="a">
            <Title
              level={2}
              style={{
                fontSize: 30,
                fontWeight: "bold"
              }}
              className="custom-text"
            >
              EXPERIENCIA
            </Title>
          </div>
          <div key="b" style={{ width: 350, margin: "auto" }}>
            <Divider/>
          </div>
          <div key="c">
            <Timeline mode="alternate" key="b">
              <Timeline.Item dot={<BankOutlined />}>
                <Tag className="custom-bg">
                  <CalendarOutlined /> 2017
                </Tag>
                <label>Inicio Estudios</label>
                <br />
                <Tag key={"1"} style={{ marginTop: 4 }}>
                  Técnico en Programación y Análisis de Sistemas
                </Tag>
              </Timeline.Item>
              <Timeline.Item dot={<BankOutlined />} style={{ fontSize: 15 }}>
                <Tag className="custom-bg">
                  <CalendarOutlined /> 2020
                </Tag>
                <label>Practica y titulacion</label>
                <br />
                <Tag style={{ marginTop: 4 }} key={"1"}>
                  Técnico en Programación y Análisis de Sistemas
                </Tag>
              </Timeline.Item>
              <Timeline.Item dot={<CoffeeOutlined />}>
                <Tag className="custom-bg">
                  <CalendarOutlined /> 2020
                </Tag>
                Opciones S.A
                <br />
                <Tag style={{ marginTop: 4 }}>Desarrollador Full Stack Jr</Tag>
              </Timeline.Item>
              <Timeline.Item dot={<BankOutlined />} style={{ fontSize: 15 }}>
                <Tag className="custom-bg">
                  <CalendarOutlined /> 2020
                </Tag>
                Inicio Estudios
                <br />
                <Tag style={{ marginTop: 4 }}>
                  Ingeniería de Ejecución en Informática Mención Desarrollo de
                  Sistemas
                </Tag>
              </Timeline.Item>
              <Timeline.Item dot={<BankOutlined />} style={{ fontSize: 15 }}>
                <Tag className="custom-bg">
                  <CalendarOutlined /> 2021
                </Tag>
                Titulacion
                <br />
                <Tag style={{ marginTop: 4 }}>
                  Ingeniería de Ejecución en Informática Mención Desarrollo de
                  Sistemas
                </Tag>
              </Timeline.Item>
              <Timeline.Item dot={<CoffeeOutlined />}>
                <Tag className="custom-bg">
                  <CalendarOutlined /> 2022 - Actualidad
                </Tag>
                Full Stack Developer
                <br />
                <Tag style={{ marginTop: 4 }}>
                  Grupo De Empresas Turbus S.A.
                </Tag>
              </Timeline.Item>
            </Timeline>
          </div>
        </QueueAnim>
      </Col>
    </Row>
  );
}
