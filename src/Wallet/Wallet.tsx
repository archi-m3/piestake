import React, {useState} from "react";
import {Button, Row, Col, Card} from "antd";
import './Wallet.less';

function Wallet() {
  const [rewardAddress, setRewardAddress] = useState<string>();

  const onConnect = async () => {
    const isEnabled = await window.cardano.isEnabled();
    if (!isEnabled) {
      await window.cardano.enable();
    }

    const rewardAddress = await window.cardano.getRewardAddress();
    setRewardAddress(rewardAddress);
  };

  const headStyle = {
    fontSize: "2.4rem",
    fontWeight: 600,
    color: '@black'
  };

  const title = rewardAddress ? "Connected to wallet" : "Connect to Nami Wallet";

  const connectButton = !rewardAddress && (
    <Button type="primary" shape="round" size="large" onClick={onConnect}>
      Connect
    </Button>
  );

  return (
    <section id="wallet" className="wallet">
      <Row>
        <Col lg={{span: 12, offset: 6}} span={24}>
          <Card
            title={title}
            className="walletCard"
            headStyle={headStyle}
            bordered={false}>
            {connectButton}
            {rewardAddress && 'Reward Address: ' + rewardAddress}
          </Card>
      </Col>
      </Row>
    </section>
  );
}

export default Wallet;
