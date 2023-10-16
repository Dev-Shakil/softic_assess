'use client'

import { Button, Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

const Header = () => {
    return(
        <>
      <Row>
      <Col span={12} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        1 col-order-responsive
      </Col>
      <Col span={12} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        2 col-order-responsive
      </Col>
      
    </Row>
        </>
    )
}
export default Header;
