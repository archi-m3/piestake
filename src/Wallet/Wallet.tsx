import React, {useState} from "react";
import {Button, Row, Col, Card} from "antd";
import {baseAddrToStakeAddr} from "../utils";
import './Wallet.less';

function Wallet() {
  const [stakeAddress, setStakeAddress] = useState<string>();

  const onConnect = async () => {
    const isEnabled = await window.cardano.isEnabled();
    if (!isEnabled) {
      await window.cardano.enable();
    }

    const usedAddresses = await window.cardano.getUsedAddresses();
    usedAddresses[0] && setStakeAddress(baseAddrToStakeAddr(usedAddresses[0]));
  };

  const headStyle = {
    fontSize: "2.4rem",
    fontWeight: 600,
    color: '@black'
  };

  const title = stakeAddress ? "Connected to wallet" : "Connect to Nami Wallet";

  const connectButton = !stakeAddress && (
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
            {stakeAddress && 'Stake Address: ' + stakeAddress}
          </Card>
      </Col>
      </Row>
    </section>
  );
}

export default Wallet;
