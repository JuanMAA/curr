import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { WordCloud } from "@ant-design/plots";
import Title from "antd/lib/typography/Title";
import { Col, Divider, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import { random } from "../utils";

export default function SkillsComponent() {
  const [data, setData] = useState([
    {
      rate: 3.9,
      title: "BOOTSTRAP",
      id: "1",
      tag: "Front-End",
    },
    {
      rate: 1,
      title: "ANTDESIGN",
      id: "2",
      tag: "Front-End",
    },
    {
      rate: 5.9,
      title: "VUE.JS",
      id: "3",
      tag: "Front-End",
    },
    {
      rate: 8.9,
      title: "REACT.JS",
      id: "3",
      tag: "Front-End",
    },
    {
      rate: 6.9,
      title: "NEST.JS",
      id: "4",
      tag: "Back-End",
    },
    {
      rate: 7.1,
      title: "ORACLE",
      id: "5",
      tag: "Database",
    },
    {
      rate: 9.0,
      title: "MYSQL",
      id: "6",
      tag: "Database",
    },
    {
      rate: 5.9,
      title: "H2 DB",
      id: "7",
      tag: "Database",
    },
    {
      rate: 9.9,
      title: "MONGO DB",
      id: "8",
      tag: "Database",
    },
    {
      rate: 3.9,
      title: "POSTGRESQL",
      id: "9",
      tag: "Database",
    },
    {
      rate: 2.9,
      title: "UML",
      id: "10",
      tag: "Other",
    },
    {
      rate: 6.9,
      title: "BIZAGUI MODELER",
      id: "10",
      tag: "Modelamiento de Datos",
    },
    {
      rate: 7.9,
      title: "HTML-5",
      id: "11",
      tag: "Front-End",
    },
    {
      rate: 5.9,
      title: "CSS-3",
      id: "11",
      tag: "CSS",
    },
    {
      rate: 6.9,
      title: "ERP APACHE OFBIZ",
      id: "12",
      tag: "Other",
    },
    {
      rate: 3.9,
      title: "GITLAB",
      id: "12",
      tag: "GIT",
    },
    {
      rate: 2.9,
      title: "GITHUB",
      id: "13",
      tag: "GIT",
    },
    {
      rate: 7.9,
      title: "BITBUCKET",
      id: "14",
      tag: "GIT",
    },
    {
      rate: 6.9,
      title: "SASS",
      id: "15",
      tag: "CSS",
    },
    {
      rate: 8.9,
      title: "LESS",
      id: "16",
      tag: "CSS",
    },
    {
      rate: 7.9,
      title: "JAVA",
      id: "16",
      tag: "Lenguajes de Programacion",
    },
    {
      rate: 6.9,
      title: "PHP",
      id: "16",
      tag: "Lenguajes de Programacion",
    },
    {
      rate: 5.9,
      title: "JAVASCRIPT",
      id: "16",
      tag: "Lenguajes de Programacion",
    },
    {
      rate: 2.9,
      title: "TRELLO",
      id: "16",
      tag: "Lenguajes de Programacion",
    },
    {
      rate: 8.9,
      title: "KOTLIN",
      id: "16",
      tag: "Lenguajes de Programacion",
    },
    {
      rate: 8.9,
      title: "SQL SERVER",
      id: "16",
      tag: "Lenguajes de Programacion",
    },
  ]);

  const config = {
    data,
    wordField: "title",
    weightField: "rate",
    colorField: "tag",
    color: "#457697",
    backgroundColor: "red",
    fontWidth: 800,
    legend: {},
    wordStyle: {
      fontSize: [40, 20],
      padding: 8,
      //rotation: 0,
    },
    state: {
      active: {
        style: {
          lineWidth: 0,
        },
      },
    },
  };

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
        <Col xs={24} style={{ textAlign: "center", margin: "auto" }}>
          <QueueAnim
            delay={300}
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
                  fontWeight: "bold",
                  margin: 0,
                }}
                className={"color-style-"+random(4)}
                >
                SKILLS
              </Title>
            </div>
            <div key="c" style={{ width: 900, height: 500, margin: "auto" }}>
              <WordCloud {...(config as any)} />
            </div>
          </QueueAnim>
        </Col>
      </Row>
    </>
  );
}
