import React, {useCallback, useEffect, useState} from "react";
import {Button, Divider, Row, Col, Card, Spin, Timeline} from "antd";
import {baseAddrToStakeAddr} from "../utils";
import './Wallet.less';

import type {Reward} from "./Wallet.types";

const pieverseUrlRoot = 'https://api.pieverse.workers.dev';

function Wallet() {
  const [stakeAddr, setStakeAddress] = useState<string>();
  const [isLoadingRewards, setIsLoadingRewards] = useState(false);
  const [rewards, setRewards] = useState<Array<Reward>>();

  const maybeLoadRewards = useCallback(
    async () => {
      if (!stakeAddr) return;
      try {
        setIsLoadingRewards(true);
        const url = `${pieverseUrlRoot}/rewards?addr=${stakeAddr}`;
        const response = await fetch(url);
        const data = await response.json();
        setRewards(data);
      } finally {
        setIsLoadingRewards(false);
      }
    },
    [stakeAddr]
  );

  useEffect(() => {maybeLoadRewards();}, [stakeAddr]);

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

  const toAda = (lovelace: string) => {
    lovelace = lovelace.padStart(7, '0');
    return `${lovelace.substring(0, lovelace.length - 6)}.${lovelace.substring(lovelace.length - 6)}`;
  };

  const cardContent = (): React.ReactNode => {
    if (isLoadingRewards) {
      return <Spin/>;
    } else if (stakeAddr) {
      const cardanoScanLink = `https://cardanoscan.io/stakekey/${stakeAddr}`;
      return (
        <>
          Stake Address: <a href={cardanoScanLink} target="_blank">{stakeAddr}</a>
          <Divider/>
          <Timeline mode='left' reverse={true}>
            {rewards?.map(r => (
              <Timeline.Item key={r.epoch} label={`${r.epoch}`}>
                ₳ {toAda(r.amount)}
                <br/>
                {r.pool_id}
              </Timeline.Item>
            ))}
          </Timeline>
        </>
      )
    } else if (!stakeAddr) {
      return (
        <Button type="primary" shape="round" size="large" onClick={onConnect}>
          Connect to Nami wallet
        </Button>
      );
    }
  };

  return (
    <section id="wallet" className="wallet">
      <Row>
        <Col lg={{span: 12, offset: 6}} span={24}>
          <Card
            title="Check Rewards"
            className="walletCard"
            headStyle={headStyle}
            bordered={false}>
            {cardContent()}
          </Card>
      </Col>
      </Row>
    </section>
  );
}

export default Wallet;
